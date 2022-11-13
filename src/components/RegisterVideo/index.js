import React from "react";
import { StyledRegisterVideo } from "./style";
import { createClient } from "@supabase/supabase-js";

const PROJECT_URL = "https://vxdzddbgjxtlmpcsmbff.supabase.co";
const PUBLIC_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZ4ZHpkZGJnanh0bG1wY3NtYmZmIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjgzNjc1ODIsImV4cCI6MTk4Mzk0MzU4Mn0.ZTGODhjGTSHcGX22NLxsjPk_yxG-Kahj8jx4AhxsCTY";
const supabase = createClient(PROJECT_URL, PUBLIC_KEY);

function getThumbnail(url) {
    return `https://img.youtube.com/vi/${url.split("v=")[1]}/hqdefault.jpg`;
}

function useForm(propsDoForm) {
    const [values, setValues] = React.useState(propsDoForm.initialValues);

    return {
        values,
        handleChange: (evento) => {
            console.log(evento.target);
            const value = evento.target.value;
            const name = evento.target.name;
            const thumbnail = thumbVideo(evento.target.value);
            if (name == "url") {
                setValues({
                    ...values,
                    [name]: value,
                    thumb: thumbnail,
                })
            }
            else {
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
function thumbVideo(url) {
    var id_url = url;
    id_url = id_url.replace("https://www.youtube.com/watch?v=", "")
    return `https://i.ytimg.com/vi/${id_url}/hq720.jpg`;
}
export default function RegisterVideo() {
    const formCadastro = useForm({
        initialValues: { titulo: "", url: "", thumb: '', playlist: '' }
    });
    const [formVisivel, setFormVisivel] = React.useState(false);
    return (
        <StyledRegisterVideo>
            <button className="add-video" onClick={() => setFormVisivel(true)}>+</button>
            {formVisivel ? (
                <form onSubmit={(evento) => {
                    evento.preventDefault();
                    // Contrato entre o nosso Front e o BackEnd
                    supabase.from("video").insert({
                        title: formCadastro.values.titulo,
                        url: formCadastro.values.url,
                        thumb: getThumbnail(formCadastro.values.url),
                        playlist: formCadastro.values.playlist,
                    })
                        .then((oqueveio) => {
                            console.log(oqueveio);
                        })
                        .catch((err) => {
                            console.log(err);
                        })
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
                        <input placeholder="Nome playlist"
                            name="playlist"
                            value={formCadastro.values.playlist}
                            onChange={formCadastro.handleChange}
                        />
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