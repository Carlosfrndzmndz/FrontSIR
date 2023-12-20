import React from 'react';
import Layout from "../../Components/Layout";
import LandingNavbar from "../../Components/Navbar/Landing";
import './LandingPage.css';
import backgroundImg from '../../assets/Lp.png'; // Asegúrate de que la ruta sea correcta

function LandingPage() {
    const heroStyle = {
        backgroundImage: `url(${backgroundImg})`
    };

    return (
        <>
            <LandingNavbar />
            <div className="landing-page mt-20">
                <section className="hero" style={heroStyle}>
                    <div className="hero-content">
                        <h1>Gestión Eficaz de Reclamos para Edificios</h1>
                        <p>Transforma la experiencia de administración de tu propiedad</p>
                        <button className="cta">Descubre Más</button>
                    </div>
                </section>

                <section className="features">
                    <div className="feature">
                        <h2>Registro Fácil</h2>
                        <p>Registra tu edificio de forma sencilla y rápida.</p>
                    </div>
                    <div className="feature">
                        <h2>Manejo de Reclamos</h2>
                        <p>Administra reclamos de manera eficiente y transparente.</p>
                    </div>
                    <div className="feature">
                        <h2>Seguimiento en Tiempo Real</h2>
                        <p>Realiza un seguimiento completo de cada caso.</p>
                    </div>
                </section>

                <section className="testimonials">
                    <h2>Lo Que Dicen Nuestros Clientes</h2>
                    <blockquote>
                        "El sistema ha revolucionado la forma en que gestionamos nuestros edificios. Eficiencia y transparencia en cada paso."
                    </blockquote>
                    <cite>- Gerente de Propiedad</cite>
                </section>

                <section className="cta-section">
                    <h2>Empieza Hoy</h2>
                    <button className="cta">Únete Ahora</button>
                </section>

                <footer className="footer">
                    <p>© 2023 Sistema de Reclamos de Edificios. Todos los derechos reservados.</p>
                </footer>
            </div>
        </>
    );
}

export default LandingPage;
