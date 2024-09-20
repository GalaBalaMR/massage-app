import { Link, Head } from "@inertiajs/react";
import Header from "@/Components/Header";

export default function Welcome({ logoRoute }) {
    return (
        <>
            <Head title="Welcome" />
            
            <Header logoRoute={ logoRoute }></Header>

            <main>
                <section className="intro">
                    <div>
                        <p></p>
                    </div>
                </section>
            </main>
        </>
    );
}
