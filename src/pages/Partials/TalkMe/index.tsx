import React, { useState, ChangeEvent, FormEvent } from 'react';
import swal from 'sweetalert';
import SocialMedia from  '../SocialMedia';

import './style.scss';
import api from '../../../services/api'

const TalkMe = () => {
    const [formData, setFormData] = useState({
        nome: '',
        email: '',
        telefone: ''
    })
    const [message, setMessage] = useState<string>()

    function handleTextAreaChange(event:ChangeEvent<HTMLTextAreaElement>){
        const {name, value} = event.target;
        setMessage(value)
    }

    function handleInputchange(event: ChangeEvent<HTMLInputElement>){ 
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value})
    }

    async function handleSubmit(event: FormEvent) {
        event.preventDefault();
        const {nome, email, telefone} = formData;
        const mensagem = message;
        const data = {
            nome,
            email,
            telefone,
            mensagem
        }
        try {
            await api.post('send-mail', data);
            swal("Enviado com sucesso", "Assim que puder, eu entro em contato via e-mail ou telefone", "success");
            debugger;
            setFormData({nome: '', email: '', telefone: ''} )
            setMessage('')
            debugger;
        } catch(e) {
            swal("Ops", "Parece que algo deu errado. Tente novamente", "danger");
            console.log(`Erro ao enviar o e-mail: ${e}`)
        }
    }

    return (
        <section className="container-fluid" id="talk_me">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-4 col-lg-5">
                        <div className="infos">
                            <h2 className="mb-2 h1 title">Fale <span className="d-block text-bs-blue">Comigo <span className="text-dark">.</span></span></h2>
                            <SocialMedia />
                        </div>
                    </div>
                    <div className="col-12 col-md-8 col-lg-7">
                        <form className="bg-white p-3 rounded" onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="name">Seu nome</label>
                                <input
                                    type="text"
                                    name="nome"
                                    id="name"
                                    required
                                    className="form-control"
                                    onChange={handleInputchange}
                                    />
                            </div>
                            <div className="form-row">
                                <div className="form-group col-12 col-md-7">
                                    <label htmlFor="email">E-mail</label>
                                    <input
                                        type="email"
                                        name="email"
                                        id="email"
                                        required
                                        className="form-control"
                                        onChange={handleInputchange}/>
                                </div>
                                <div className="form-group col-12 col-md-5">
                                <label htmlFor="email">Telefone</label>
                                    <input
                                        type="text"
                                        name="telefone"
                                        id="telefone"
                                        required
                                        className="form-control"
                                        onChange={handleInputchange} />
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="message">No que eu posso ajudar?</label>
                                <textarea
                                    className="form-control"
                                    id="message"
                                    name="message"
                                    rows={3}
                                    required
                                    onChange={handleTextAreaChange}
                                    >
                                </textarea>
                            </div>
                            <button type="submit" className="btn btn-bs-blue py-2">Entrar em contato</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default TalkMe;