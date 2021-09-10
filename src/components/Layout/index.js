import style from './style.module.css'

const Layout = ({title, descr, urlBg, colorBg}) => {
    const descrStyles = [style.desc, style.full];
    const sectionStyle = {
        background: urlBg ? `url(${urlBg})` : colorBg
    }
    return (
        <section className={style.root} style={sectionStyle}>
            <div className={style.wrapper}>
                <article>
                    <div className={style.title}>
                        <h3>{title}</h3>
                        <span className={style.separator} />
                    </div>
                    <div className={descrStyles}>
                        <p>{descr}</p>
                    </div>
                </article>
            </div>
        </section>
    );
}

export default Layout;