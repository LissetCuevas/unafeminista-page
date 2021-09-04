import Head from 'next/head';
import StaticNavbar from './components/navbar';
import Footer from './components/footer';
import 'bootstrap/dist/css/bootstrap.min.css';

import React from 'react'

export default function TermsAndConditions() {

  return (
    <div>
      <Head>
        <title>Terminos y Condiciones</title>
        <link rel="icon" href="/images/logo.jpg" />
        <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>

        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1" crossOrigin="anonymous" />
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js" integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW" crossOrigin="anonymous"></script>
      </Head>

      <StaticNavbar/>
      <main style={{ padding: '0% 20% 3% 20%' }}>
          <h1>Terminos y condiciones</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse et dui leo. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Proin bibendum, massa ac pellentesque tincidunt, tortor elit congue nisl, vel molestie tortor orci accumsan elit. Ut in ipsum id sapien semper vestibulum in eu sem. In lacus augue, tristique quis nisi eu, condimentum sodales quam. Curabitur in orci lectus. Integer malesuada augue libero, sed efficitur odio tempor sed. Aliquam hendrerit rutrum turpis, ac suscipit tellus auctor in. In mattis risus nisl, vitae vestibulum mauris tempus sit amet. Etiam non imperdiet ligula, a laoreet risus. Nam orci sapien, placerat sit amet pretium eget, suscipit tincidunt urna.
          </p>
          <p>
            Nulla facilisi. Donec venenatis ultricies turpis vitae laoreet. Pellentesque diam nunc, ultricies non varius ac, tincidunt et magna. Etiam orci lorem, euismod vitae elit ac, molestie dictum dui. Aenean vitae tempus ex. Vivamus ultricies justo eu porttitor sollicitudin. Mauris vitae venenatis libero. Donec id consequat nisi. Curabitur id gravida felis. In ut vehicula libero, vitae mattis elit. Curabitur vel purus eros. Pellentesque euismod enim ut ligula blandit imperdiet non eu dui. Donec sollicitudin sagittis metus nec lacinia. Integer sit amet lectus ut nisi viverra rutrum.
          </p>
          <p>
            Donec et massa tortor. Mauris odio leo, condimentum sed dapibus sed, pellentesque ut ex. Integer tempus elit sed neque sodales, quis gravida nulla vestibulum. Curabitur ac ligula dui. Phasellus id mi arcu. Ut pulvinar, elit ac tempus tincidunt, diam dolor vehicula mauris, vitae ullamcorper enim elit vitae ipsum. Sed vehicula odio sed odio luctus pharetra. Phasellus lectus diam, malesuada et nulla sed, dictum accumsan est. Suspendisse aliquam, massa non tincidunt finibus, lorem tortor dignissim est, non placerat tortor est nec urna.
          </p>
          <p>
            Phasellus in commodo dui. Suspendisse pulvinar, erat at mollis malesuada, ipsum odio gravida tellus, faucibus laoreet mi augue quis eros. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vivamus euismod, turpis in iaculis vestibulum, est risus facilisis est, ut laoreet dolor lectus eget odio. Sed vitae lectus rutrum, molestie augue rhoncus, laoreet turpis. Nam dapibus accumsan ex at gravida. Proin blandit lobortis lectus, vitae cursus orci auctor eu. Sed egestas consectetur dolor, ac vehicula dolor iaculis quis. Vestibulum tincidunt mi ipsum, a faucibus urna rhoncus in. In hac habitasse platea dictumst. Quisque vel iaculis velit. Vestibulum risus enim, malesuada in arcu vel, pellentesque dignissim felis.
          </p>
          <p>
            Donec nec rutrum augue. Fusce scelerisque dolor eget risus tempus, volutpat vestibulum dolor commodo. Duis eget tellus sed felis interdum lobortis. Vivamus vel bibendum erat, gravida hendrerit sapien. Ut consequat arcu sit amet tortor tempus, vitae egestas leo varius. Quisque auctor, ex eget scelerisque malesuada, lacus tortor molestie risus, nec mattis ipsum quam eu diam. Donec tincidunt eleifend magna, quis gravida arcu consequat faucibus. Proin ipsum augue, dictum vel aliquam in, elementum eu nisi. In porta cursus porttitor. Fusce interdum elementum interdum. Sed tempus consectetur malesuada. Suspendisse sit amet quam justo.
          </p>
      </main>
      <Footer/>
    </div>
  )
}
