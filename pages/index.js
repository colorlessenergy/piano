import Head from 'next/head';

export default function Home() {
    return (
        <div>
            <Head>
                <title>piano</title>
                <meta name="description" content="piano" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className="container">
                <div className="piano">
                    <div className="piano-top"></div>
                    <div className="piano-bottom">
                        <div className="piano-white-key"></div>
                        <div className="piano-black-key piano-black-key-0"></div>
                        <div className="piano-white-key"></div>
                        <div className="piano-black-key piano-black-key-1"></div>
                        <div className="piano-white-key"></div>
                        <div className="piano-white-key"></div>
                        <div className="piano-black-key piano-black-key-2"></div>
                        <div className="piano-white-key"></div>
                        <div className="piano-black-key piano-black-key-3"></div>
                        <div className="piano-white-key"></div>
                        <div className="piano-black-key piano-black-key-4"></div>
                        <div className="piano-white-key"></div>
                    </div>
                </div>
            </div>
        </div>
    );
}
