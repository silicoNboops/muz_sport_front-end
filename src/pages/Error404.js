import React from "react";

export default function Error404(props) {
    return(
        <section className="padding-y-sm">
            <div className="container text-white">
                <div className="error-page">
                    <div className="object-text">
                        <div className="content">
                            <h1>ERROR</h1>
                            <h3>404</h3>
                        </div>
                    </div>
                    <h2>Вернуться на <a href="/">главную</a></h2>
                </div>
            </div>
        </section>
    )
};
