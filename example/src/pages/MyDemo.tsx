import { Button, Card, IconCard, List, Progress, Space } from "../../../src";

export default function Resources() {
    const data = [
        {
            title: "Official google resources",
            description: "Explore different button styles and functionalities.",
            link: "https://m3.material.io/",
            img: undefined,
            buttonText: "Visit Material Design",
        },
        {
            title: "BeerCSS documentation",
            description: "The official documentation for BeerCSS, handy for building compex UI's and components.",
            link: "https://beercss.com/docs/",
            img: undefined,
            buttonText: "Read Documentation",
        },
        {
            title: "BeerReact source code",
            description: "Turns out that you can just read the source code of open source projects O:",
            link: "https://github.com/siemvk/beerreact",
            img: undefined,
            buttonText: "View Source Code",
        },
    ];
    return (
        <main className="responsive padding">
            <h2>Resources</h2>
            <p className="secondary-text">Various resources for your reference.</p>
            <Space />
            <div className="grid">
                {data.map((item, index) => (
                    <div className="s12 m6" key={index}>
                        <Card className="no-padding">
                            <img src={item.img ?? "https://user-cdn.hackclub-assets.com/01a05816-8d0f-7c64-a740-a07a95220581/20260525_143827.jpg"} className="small responsive"></img>
                            <div className="padding">
                                <h5>{item.title}</h5>
                                <p className="secondary-text">{item.description}</p>
                                <nav className={"right-align"}>
                                    <a href={item.link} className="button" target="_blank" rel="noopener noreferrer">
                                        {item.buttonText}
                                    </a>
                                </nav>
                            </div>
                        </Card>
                    </div>
                ))}
            </div>


        </main >
    );
}
