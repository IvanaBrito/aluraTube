import config from '../../../config.json';
import styled from 'styled-components';

const StyledHeader = styled.div`
    margin-top: 50px;
    .user-info img {
        width: 80px;
        height: 80px;
        border-radius: 50%;
    }
    .user-info {
        display: flex;
        align-items: center;
        width: 100%;
        padding: 16px 32px;
        gap: 16px;
    }
    .banner img{
        width: 100%;
        height: 250px;
        object-fit: cover;
    }
`;

function Header() {
    return(
        <StyledHeader>
            <div className='banner'>
                <img src={config.banner} alt="banner" />
            </div>
            <section className="user-info">
                <img src={`https://github.com/${config.github}.png`} alt="profile"/>
                <div>
                    <h2>
                        {config.name}
                    </h2>
                    <p>
                        {config.job}
                    </p>
                </div>
            </section>
        </StyledHeader>
    )
  }
  
  export default Header