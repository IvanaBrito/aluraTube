import styled from "styled-components";

export const StyledFavoritos = styled.div`
  width: 100%;
  overflow: hidden;
  h2 {
    font-size: 16px;
    margin-bottom: 16px;
    text-transform: capitalize;
  }
  img {
    object-fit: cover;
    width: 80px;
    height: 80px;
    border-radius: 50%;
  }
  section {
    width: 100%;
    padding: 0;
    overflow: hidden;
    padding: 16px;
    .lista_users {
      
      width: calc(100vw - 16px * 4);
      display: grid;
      grid-gap: 16px;
      grid-template-columns: repeat(auto-fill,minmax(120px,1fr));
      grid-auto-flow: column;
      grid-auto-columns: minmax(200px,1fr);
      overflow-x: scroll;
      scroll-snap-type: x mandatory;
      .user{
        text-align: center;
      }
      a {
        scroll-snap-align: start;
        text-align: center;
        span {
          padding-top: 8px;
          display: block;
          color: ${({ theme }) => theme.textColorBase || "#222222"};
        }
      }
    }
  }
`;

function Favoritos(favoritos) {
  const favoritos_lista = favoritos.favoritos;
  return (
    <StyledFavoritos>
      <section>
        <h2>Favoritos</h2>
        <div className="lista_users">
          {favoritos_lista.map(item => {

            return (
              <div key={item.key} className="user">
                <a href="">
                  <img src={`https://github.com/${item.profile}.png`} />
                  <span>@{item.user}</span>
                </a>
              </div>
            )
          })}
        </div>
      </section>
    </StyledFavoritos>
  )
}

export default Favoritos