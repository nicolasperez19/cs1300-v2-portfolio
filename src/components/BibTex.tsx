import { Clipboard } from '@phosphor-icons/react';

interface BibTexProps {
    title: string;
    slug: string;
    year: number;
}

const BibTex: React.FC<BibTexProps> = ({title, slug, year}) => {

    const citation = `
    @misc{nico-perez, 
        author = {Nico Perez},  
        title = {${title}}, 
        url = {https://nicolasperez19.github.io/cs1300-v2-portfolio/projects/${slug}},   
        year = {${year}}
}`.trimStart();

    const handleCopyToClipboard = ()=> {
        navigator.clipboard.writeText(citation);
    }
    return (
        <section className="bg-teal-200 text-primary w-full md:h-screen lg:h-full">
            <div className="px-5 md:px-24 h-full py-20">
                <h2 className="text-4xl font-display font-bold mb-8">Citation</h2>
                <p className="mb-4">If you find my project useful, please consider citing it in your research.</p>
                <div className="flex flex-row justify-end mb-3">
                    <button className="flex items-center p-2.5 h-10 border-2 border-black rounded-full bg-yellow-200 hover:bg-yellow-300 hover:shadow-neo font-display" onClick={handleCopyToClipboard}>
                        <Clipboard size={32} weight="fill" className="mr-2" />
                        Copy to Clipboard
                    </button>
                </div>
                <div className="grid grid-cols-1 gap-8">
                    <pre className="bg-secondary text-primary p-6 border-2 border-black rounded-md">
                        <code className="w-full text-wrap">{citation}</code>
                    </pre>
                </div>
            </div>
        </section>
    );
}

export default BibTex;