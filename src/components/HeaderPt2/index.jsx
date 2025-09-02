import { useState, useEffect } from 'react';
import './HeaderPt2.css';
import menu from '../../assets/icon-menu.png';
import { Link, useLocation } from 'react-router-dom';

export const HeaderPt2 = () => {
    const [valorTela, setValorTela] = useState(window.innerWidth);
    const [clicado, setClicado] = useState(false);
    const [optClicada, setOptClicada] = useState(null);
    const location = useLocation();

    useEffect(() => {
        const handleResizable = () => {
            setValorTela(window.innerWidth);
        }
        window.addEventListener('resize', handleResizable);

        return () => {
            window.removeEventListener('resize', handleResizable);
        }
    }, []);

    useEffect(() => {
        // Fecha a sub-lista e o menu hambúrguer ao mudar a rota
        setOptClicada(null);
        setClicado(false);
    }, [location]);

    const listaNavbar = [
        {
            titulo: 'Início',
            caminho: '/'
        },
        {
            titulo: 'Quero revender',
            caminho: '/revender'
        },
        {
            titulo: 'Quero a porta instalada',
            caminho: '/portainstalada'
        },
        {
            titulo: 'Mais soluções ▾',
            caminho: '',
            sub: [
                { titulo: 'Acessórios', caminho: '/acessorios' },
                { titulo: 'Automatizadores', caminho: '/automatizadores' }
            ]
        },
        {
            titulo: 'Quem somos ▾',
            caminho: '',
            sub: [
                { titulo: 'Sobre a Eletroportas', caminho: '/sobre' },
                { titulo: 'Pintura Eletrostática', caminho: '/pintura' }
            ]
        },
        {
            titulo: 'Atendimento',
            caminho: '/atendimento'
        },
    ]

    const handleClick = (indice, caminho) => (e) => {
        if (caminho === '') {
            e.preventDefault();
            setOptClicada(indice === optClicada ? null : indice);
        } else {
            setOptClicada(null);
        }
    }

    return (
        <section className='headerPt2-section'>
            <div className='headerPt2-container'>
                {
                    valorTela < 1032 ? (
                        <section className='orange-container-section'>
                            <div className='orange-container-container'>
                                <div>
                                    <img src={menu} onClick={() => setClicado(!clicado)} alt="Menu" />
                                </div>

                                <ul>
                                    {
                                        clicado && (
                                            <>
                                                {
                                                    listaNavbar.map((item, indice) => {
                                                        return (
                                                            <li key={indice} className='nav-item'>
                                                                <Link
                                                                    onClick={handleClick(indice, item.caminho)}
                                                                    to={item.caminho || '#'}
                                                                    className={indice === optClicada ? 'clicado link-navbar' : 'link-navbar'}
                                                                >
                                                                    {item.titulo}
                                                                </Link>
                                                                {
                                                                    item.sub && (
                                                                        <ul className={`sub-lista ${indice === optClicada ? 'open' : ''}`}>
                                                                            {
                                                                                item.sub.map((subItem, subIndice) => (
                                                                                    <Link key={subIndice} to={subItem.caminho} className='link2'>
                                                                                   
                                                                                        <li className='hover-lista'>{subItem.titulo}</li>
                                                                                      
                                                                                    </Link>      
                                                                                ))
                                                                            }
                                                                        </ul>
                                                                    )
                                                                }
                                                            </li>
                                                        )
                                                    })
                                                }
                                            </>
                                        )
                                    }
                                </ul>
                            </div>
                        </section>
                    ) : (
                        <section className='orange-container-section'>
                            <div className='orange-container2'>
                                <ul>
                                    {
                                        listaNavbar.map((item, indice) => {
                                            return (
                                                <>
                                                    <Link
                                                        onClick={handleClick(indice, item.caminho)}
                                                        className={optClicada === indice ? 'link-navbar2 linkClicado' : 'link-navbar2'}
                                                        key={indice}
                                                        to={item.caminho || '#'}
                                                    >
                                                        <li>{item.titulo}</li>
                                                    </Link>
                                                    {
                                                        (item.sub && optClicada === indice) ? (
                                                            <ul className={`${indice === 3 ? 'sub-lista2' : ''} ${indice === 4 ? 'sub-lista22' : ''}`}>
                                                                {
                                                                    item.sub.map((subItem, subIndice) => {
                                                                        return (
                                                                            <Link className='sublista-item' key={subIndice} to={subItem.caminho}>
                                                                                <li>{subItem.titulo}</li>
                                                                            </Link>
                                                                        )
                                                                    })
                                                                }
                                                            </ul>
                                                        ) : ''
                                                    }
                                                </>
                                            )
                                        })
                                    }
                                </ul>
                            </div>
                        </section>
                    )
                }
            </div>
        </section>
    )
}
