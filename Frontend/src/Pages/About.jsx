import React from 'react'
import Layout from '../Components/Layout/Layout'
const Contact =()=>{
    return(
        <Layout title={'About Us'}>
           
            <div className="bg-gray-100 min-h-screen">
      {/* Background Image */}
      <div 
        className="bg-cover bg-center h-96 flex items-center justify-center" 
        style={{ backgroundImage: 'url("https://wallpapercave.com/wp/wp2689252.jpg")' }}
      >
        <h1 className="text-white text-4xl md:text-6xl font-bold">About Us</h1>
      </div>

      {/* Company Description */}
      <section className="text-center py-16 px-4 md:px-12 lg:px-24">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Who We Are</h2>
        <p className="text-gray-600 text-lg">
          Our company specializes in delivering world-class solutions for businesses and individuals. With a vision of innovation and excellence, we strive to provide the best services in the industry. 
        </p>
      </section>

      {/* Heads Section */}
      <section className="py-16 bg-white px-4 md:px-12 lg:px-24">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Our Leadership</h2>
        <div className="flex flex-wrap justify-center gap-8">
          <div className="max-w-xs bg-gray-50 shadow-lg rounded-lg overflow-hidden">
            <img src="https://th.bing.com/th/id/OIP.dg6vTBC1_Vbfu5qx0xxKRQAAAA?w=315&h=420&rs=1&pid=ImgDetMain" alt="Head 1" className="w-full h-64 object-cover" />
            <div className="p-4 text-center">
              <h3 className="text-xl font-bold text-gray-800">John Doe</h3>
              <p className="text-gray-600">CEO</p>
            </div>
          </div>
          {/* <div className="max-w-xs bg-gray-50 shadow-lg rounded-lg overflow-hidden">
            <img src="/path-to-head2.jpg" alt="Head 2" className="w-full h-64 object-cover" />
            <div className="p-4 text-center">
              <h3 className="text-xl font-bold text-gray-800">Jane Smith</h3>
              <p className="text-gray-600">CTO</p>
            </div>
          </div> */}
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-16 px-4 md:px-12 lg:px-24 bg-gray-100">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">Our Vision</h2>
        <p className="text-center text-gray-600 text-lg">
          To be the global leader in innovative solutions that enhance the future of technology and business.
        </p>
      </section>

      {/* Social Commitments Section */}
      <section className="py-16 bg-white px-4 md:px-12 lg:px-24">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">Social Commitments</h2>
        <p className="text-center text-gray-600 text-lg">
          We are dedicated to contributing to society by participating in sustainable initiatives and supporting local communities through various projects.
        </p>
      </section>

      {/* Gallery Section */}
      <section className="py-16 bg-gray-100 px-4 md:px-12 lg:px-24">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Gallery</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <img src="https://gumlet.assettype.com/thenewsminute/import/sites/default/files/Vanilla_plant_pic.jpg?w=1200&auto=format%2Ccompress&ogImage=true&enlarge=true" alt="Gallery 1" className="w-full h-64 object-cover rounded-lg shadow-lg" />
          <img src="https://th.bing.com/th/id/OIP.x68-rBXJxZwTn0jJZgzV4QHaFX?rs=1&pid=ImgDetMain" alt="Gallery 2" className="w-full h-64 object-cover rounded-lg shadow-lg" />
          <img src="https://keralaspicecart.com/wp-content/uploads/2020/11/image-1.jpg" alt="Gallery 3" className="w-full h-64 object-cover rounded-lg shadow-lg" />
          <img src="https://homespunspice.com/wp-content/uploads/2023/04/IN-ARTICLE-2-2.jpg" alt="Gallery 4" className="w-full h-64 object-cover rounded-lg shadow-lg" />
          <img src="https://www.agrifarming.in/wp-content/uploads/2017/06/Coffee-Growing.-1.jpg" alt="Gallery 5" className="w-full h-64 object-cover rounded-lg shadow-lg" />
          <img src="https://www.agrifarming.in/wp-content/uploads/2020/10/cacao-5486738_1920.jpg" alt="Gallery 6" className="w-full h-64 object-cover rounded-lg shadow-lg" />
        </div>
      </section>
    </div>

        </Layout>
    )
}
export default Contact