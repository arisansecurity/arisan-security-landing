export default function Activity() {
    return (
        <section className="min-h-screen pt-24 px-8 pb-10 snap-start">
            <div className="text-center">
                <h2 className="sm:text-lg sm:leading-snug font-semibold tracking-wide uppercase text-red-600 mb-3">Kegiatan Terkini</h2>
                <p className="text-4xl lg:text-3xl leading-none font-bold text-gray-800 tracking-tight mb-8"></p>
            </div>
            <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-2 mt-12 px-0 md:px-24">
                <div className="flex justify-center items-center">
                    <a href="https://slashrootctf.id/">
                        <img alt="Slashrootctf" className="object-contain md:h-72 sm:w-full" src="https://arisansecurity.id/wp-content/uploads/elementor/thumbs/Slashroot_CTF_2021-min-pct6ftz9o2fftzxi5ij2mtzyjhzn8quvysjsos55og.png" />
                    </a>
                </div>
                <div className="flex justify-center items-center">
                    <a href="https://arisansecurity.id/wp-content/uploads/2021/07/IAA.jpg">
                        <img alt="Webinar Nasional Privasi dan Keamanan Digital untuk Masyarakat" className="object-contain md:h-72 sm:w-full" src="https://arisansecurity.id/wp-content/uploads/2021/07/IAA-768x960.jpg" />
                    </a>
                </div>
                <div className="flex justify-center items-center">
                    <a href="https://arisansecurity.id/wp-content/uploads/2021/08/Flyer-arisansecurity-02-scaled.jpg">
                        <img alt="How can Indonesia Protect Its Invaluable Resource from Cyber Threat" className="object-contain md:h-72 sm:w-full" src="https://arisansecurity.id/wp-content/uploads/2021/08/Flyer-arisansecurity-02-768x768.jpg" />
                    </a>
                </div>
            </div>
        </section>
    )
}