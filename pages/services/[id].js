import { useRouter } from 'next/router'
import services from '../../data/services'
import Layout from '../../components/Layout'
import DetailsPageHeader from '../../components/DetailsPageHeader'
import SideBarLayout from '../../components/SideBarLayout'

const ServiceDetail = () => {
    const router = useRouter()
    const { id } = router.query
    const service = services ? services.find(service => service._id === id) : {
        title: 'TEST',
        description: 'test',
        iconPath: '',
        id:'dwd'
    }

    const images = [
        '/img/service-1.jpg',
        '/img/service-2.jpg',
        '/img/service-3.jpg'
    ]
    

    return (
        <>

            <Layout title={service ? service.title : 'Nos Services'}>
                <DetailsPageHeader section={service ? service.title : ''} />
                <SideBarLayout allServices={services} currentService={service} images={images} />
            </Layout>

        </>
    )
}

export default ServiceDetail;