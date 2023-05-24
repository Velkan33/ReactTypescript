import React from 'react';
import Body from './components/Body';
import Footer from './components/Footer';
import Head from './components/Head';

export default function Ableton() {
 return (
  <section className="shadow-xl max-w-[1600px]">
   <Head />
   <Body />
   <Footer />
  </section>
 );
}
