import React from 'react'
// import '../../css/templatemo_style.css'
// import '../../css/bootstrap.min.css'


const Home = () => {
    return (
        <section id="templatemo_home">
            <div className="container">
                <div className="templatemo_home_inner_wapper">
                    <h1 className="text-center"><i className="fa fa-mobile-phone"></i> AUTONEXO</h1>
                </div>
                <div className="templatemo_home_inner_wapper">
                    <h2 className="text-center">App Web para autos</h2>
                    <p className="text-center">
                        Registro de información sobre mantenimiento de autos. 
                    </p>
                </div>
                <div className="templatemo_home_inner_wapper btn_wapper">
                    <div className="col-sm-6">
                        <a href="#templatemo_features" className="btn col-xs-12 scroll_effect shadow-top-down">
                            <i className="fa fa-download"></i> Registros
                        </a>
                    </div>
                    <div className="col-sm-6">
                        <a href="#templatemo_download" className="btn col-xs-12 scroll_effect shadow-top-down">
                            <i className="fa fa-align-justify"></i> Recordatorios
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Home