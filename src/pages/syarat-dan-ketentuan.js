import * as React from "react";
import DefaultLayout from "../layouts/default";


const SyaratDanKetentuanPage = () => {
    return (
        <DefaultLayout title={"Syarat dan ketentuan"}  path={"#"}>
            <section
                className="min-h-screen grid align-baseline"
                style={{ backgroundColor: "rgba(243,243,243, 1)" }}
            >
                <div className={"container mx-auto p-4 md:p-24"}>
                    <h1 className={"text-3xl"}>Syarat Dan Ketentuan</h1>
                    Website ini dioperasikan oleh Arisan Security. Ketika menggunakan situs ini, baca syarat dan ketentuan penggunaan di bawah ini secara menyeluruh dan menyetujuinya sebelum menggunakan situs ini. Ketahuilah bahwa dengan menggunakan situs ini, Anda menyetujui semua syarat dan ketentuan penggunaan di bawah ini. Syarat dan ketentuan ini bisa berubah tanpa ada pemberitahuan terlebih dahulu, jadi kami meminta Anda untuk mengkonfirmasi syarat dan ketentuan terbaru sebelum menggunakan situs ini.

                    <h2 className={"text-xl pt-4"}>Hak Kekayaan Intelektual</h2>
                    Isi pada situs ini dilindungi oleh undang-undang hak cipta yang berlaku di masing-masing negara dan perjanjian-perjanjian terkait. Semua konten dalam situs web ini menggunakan lisensi publik Creative Commons, CC-BY-SA. Anda bebas untuk menyalin dan mendistribusikan ulang materi yang ada dalam medium atau format apapun. Juga diperkenankan untuk menggubah, mengubah, dan membuat turunan dari materi yang ada. Anda harus mencantumkan kredit yang sesuai, mencantumkan tautan terhadap lisensi, dan menyatakan apabila ada perubahan yang dilakukan atas materi yang Anda ambil. Yang perlu menjadi perhatian, Anda tidak dapat menggunakan materi ini untuk kepentingan komersial.

                    <h2 className={"text-xl pt-4"}>Laporan Penipuan</h2>
                    Pada halaman Laporkan Kasus Siber, kami menyediakan form aduan jika kamu menjadi korban penipuan. Setiap data laporan yang masuk akan kami validasi terlebih dahulu. Laporan yang masuk namun tidak lolos saat proses validasi yang kami lakukan, maka laporan itu tidak akan diproses. Selanjutnya jika sebuah laporan kami anggap dari sumber yang kredibel, kami akan memproses laporan tersebut dan mencarikan informasi tentang seseorang yang terduga penipu. Setelah informasi tentang terduga penipu kami dapatkan, kami akan mengirimkan data terduga penipu tersebut ke email yang digunakan ketika membuat laporan. Apa saja faktor yang mempengaruhi laporan kamu tidak kami proses?
                    Mencantumkan akun media sosial yang terduga adalah akun palsu Tidak melaporkan penipuan menggunakan email dan nomor hp utama Informasi transaksi dan kronologi yang kami anggap tidak jelas

                    <h2 className={"text-xl pt-4"}>Link</h2>

                    <div>Link ke situs ini, pada prinsipnya, tidak terbatas pada keadaan bahwa “Instruksi untuk Link” dipatuhi. Ketahuilah bahwa Arisan Security bisa meminta agar suatu link dihapus, tergantung pada isi situs dan metode penggunaan untuk link.</div>
                    <div className={"mt-2"}>Instruksi untuk Link :</div>
                    <ul className={""}>
                        <li>Ketika membuat link ke situs Arisan Security kami meminta agar Anda menggunakan nama Arisan Security.</li>
                        <li>Kami meminta agar Anda membuat link ke Halaman Utama dari situs Arisan Security.</li>
                        <li>Kami meminta agar Anda tidak menampilkan situs Arisan Security dalam satu frame.</li>
                    </ul>

                    <h2 className={"text-xl pt-4"}>Penolakan</h2>
                    Arisan Security melakukan semua perhatian yang wajar berkenaan dengan pembaharuan informasi dan pengoperasian situs ini. Namun, Arisan Security tidak memberikan perwakilan dan jaminan apapun, baik secara tersurat maupun tersirat, termasuk jaminan tanpa batasan yang tersirat yang berhubungan dengan akurasi, kegunaan, kecocokan, dan / atau kesesuaian untuk tujuan tertentu, dari informasi yang ada pada situs. Arisan Security juga tidak memberikan jaminan terhadap terjadinya kesalahan, keberadaan virus komputer pada server dimana situs tersebut di-host atau terhadap program-program berbahaya lainnya. Arisan Security tidak akan bertanggung jawab, dengan cara apapun, atas adanya kerugian atau kerusakan yang timbul sebagai akibat dari informasi pada situs ini atau sebagai akibat dari penggunaan situs ini. Informasi pada website ini bisa berubah tanpa ada pemberitahuan sebelumnya dan Arisan Security berhak untuk menangguhkan atau melanjutkan pengoperasian website ini.

                    Hukum dan Peradilan yang Tepat

                    Syarat dan Ketentuan Penggunaan ini akan diatur oleh dan ditafsirkan sesuai dengan undang-undang Indonesia yang berlaku. Setiap dan semua perselisihan yang timbul dari atau yang berhubungan dengan situs ini harus dibawa ke Pengadilan di Indonesia.
                </div>
            </section>
        </DefaultLayout>
    )
}

export default SyaratDanKetentuanPage;