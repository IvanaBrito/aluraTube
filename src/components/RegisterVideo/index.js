import React from "react";
import { StyledRegisterVideo } from "./style";

function useForm(propsDoForm) {
    const [values, setValues] = React.useState(propsDoForm.initialValues);

    return {
        values,
        handleChange: (evento) => {
            console.log(evento.target);
            const value = evento.target.value;
            const name = evento.target.name;
            const thumbnail = thumbVideo(evento.target.value);
            if(name == "url"){
            setValues({
                ...values,
                [name]: value,
                    thumb: thumbnail,
                })
            }
            else{
                setValues({
                    ...values,
                    [name]: value,
                });
            }
        },
        clearForm() {
            setValues({});
        }
    };
}
function thumbVideo(url){
    var id_url = url;
    id_url = id_url.replace("https://www.youtube.com/watch?v=","")
    return `https://i.ytimg.com/vi/${id_url}/hq720.jpg`;
}
export default function RegisterVideo() {
    const formCadastro = useForm({
        initialValues: { titulo: "Frost punk", url: "https://youtube..", thumb: '' }
    });
    const [formVisivel, setFormVisivel] = React.useState(true);
    return (
        <StyledRegisterVideo>
            <button className="add-video" onClick={() => setFormVisivel(true)}>+</button>
            {formVisivel ? (
                <form onSubmit={(evento) => {
                    evento.preventDefault();
                    setFormVisivel(false);
                    formCadastro.clearForm();
                }}>
                    <div>
                        <button type="button" className="close-modal" onClick={() => setFormVisivel(false)}>X</button>
                        <input placeholder="Titulo do vídeo"
                            name="titulo"
                            value={formCadastro.values.titulo}
                            onChange={formCadastro.handleChange} />
                        <input placeholder="URL"
                            name="url"
                            value={formCadastro.values.url}
                            onChange={formCadastro.handleChange} />
                        <button type="submit">Cadastrar</button>
                        {formCadastro.values.thumb && 
                            <div className="imagem_tumb">
                                <img src={formCadastro.values.thumb} alt="thumb do video" />
                            </div>
                        }
                    </div>
                </form>
            ) : null

            }

        </StyledRegisterVideo>
    )
}