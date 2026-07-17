import galeriaHomem from '@/assets/images/galeria-homem.jpg'
import galeriaModelo from '@/assets/images/galeria-modelo.jpg'
import galeriaTenisBrancoPreto from '@/assets/images/galeria-tenis-branco-e-preto.jpg'
import galeriaTenisCinza from '@/assets/images/galeria-tenis-cinza.jpg'
import galeriaTenisColorido from '@/assets/images/galeria-tenis-colorido.jpg'
import galeriaTenisRoxo from '@/assets/images/galeria-tenis-roxo.jpg'
import { Overlay } from '../Overlay'
import { Button } from '../Button'

export const Gallery = () => {
    return (
        <section className="container mb-10">
            <div className="gallery-grid">
                <div className="relative gallery-item gallery-item-highlight rounded-[20px] overflow-hidden">
                    <img src={galeriaHomem} alt="Homem usando tênis SyntaxWear" className="w-full h-full object-cover" />
                    <Overlay
                        title="Kripton One"
                        subtitle="Estilo urbano com atitude"
                        className="inset-0 justify-center">
                        <Button variant="secondary">Feminino</Button>
                        <Button variant="secondary">Masculino</Button>
                    </Overlay>
                </div>

                <div className="gallery-item gallery-item-white rounded-[20px] overflow-hidden">
                    <img src={galeriaTenisBrancoPreto} alt="Tênis branco e preto SyntaxWear" className="w-full h-full object-cover" />
                </div>

                <div className="gallery-item gallery-item-model rounded-[20px] overflow-hidden">
                    <img src={galeriaModelo} alt="Modelo feminina usando tênis SyntaxWear" className="w-full h-full object-cover" />
                </div>

                <div className="gallery-item gallery-item-color rounded-[20px] overflow-hidden">
                    <img src={galeriaTenisColorido} alt="Tênis colorido SyntaxWear" className="w-full h-full object-cover" />
                </div>

                <div className="gallery-item gallery-item-silver rounded-[20px] overflow-hidden">
                    <img src={galeriaTenisCinza} alt="Tênis cinza SyntaxWear" className="w-full h-full object-cover" />
                </div>

                <div className="gallery-item gallery-item-purple rounded-[20px] overflow-hidden">
                    <img src={galeriaTenisRoxo} alt="Tênis roxo SyntaxWear" className="w-full h-full object-cover" />
                </div>
            </div>
        </section>
    )
}