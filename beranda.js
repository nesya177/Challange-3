import React from 'react'
import './beranda.css'
class beranda extends React.Component {
    render() {
        return (
            <div>
                <div className="titel">
                    <h1>Beranda</h1>
                    <div className="line"></div>
                </div>
                <div className="box">
                    <div className="gambar">
                        <img src="/images/Corona.jpg" />
                    </div>
                    <div className="jelas">
                        <p>COVID-19 (coronavirus disease 2019) adalah jenis penyakit baru yang disebabkan oleh virus 
                            dari golongan coronavirus, yaitu SARS-CoV-2 yang juga sering disebut virus Corona.
                        Penyebab COVID-19:
                        COVID-19 disebabkan oleh SARS-CoV-2, yaitu virus jenis baru dari coronavirus (kelompok virus yang menginfeksi sistem pernapasan). Infeksi virus Corona bisa menyebabkan infeksi pernapasan ringan sampai sedang, seperti flu, atau infeksi sistem pernapasan dan paru-paru, seperti pneumonia.

COVID-19 awalnya ditularkan dari hewan ke manusia. Setelah itu, diketahui bahwa infeksi ini juga bisa menular dari manusia ke manusia. Penularannya bisa melalui cara-cara berikut:

Tidak sengaja menghirup percikan ludah (droplet) yang keluar saat penderita COVID-19 bersin atau batuk
Memegang mulut, hidung, atau mata tanpa mencuci tangan terlebih dulu, setelah menyentuh benda yang terkena droplet penderita COVID-19
Kontak jarak dekat (kurang dari 2 meter) dengan penderita COVID-19 tanpa mengenakan masker</p>
                    </div>
                </div>
            </div>
        );
    }
}
export default beranda;