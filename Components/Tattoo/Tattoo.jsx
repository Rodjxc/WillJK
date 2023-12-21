import React from 'react';
import { Tattoos } from "../../Data/Tattoos";
import "./Tattoo.css";

export const Tattoo = () => {
  return (
    <div className='container'>
      <div className='header-text'>
        <h3>TATTOO</h3>
        <h1>IREZUMI & MACHINE</h1>
        <p>日本国憲法前文において、我が国民はかかる恵まれし国土において、諸外国と協力し、わが生活の向上と共に全世界の平和を維持し、わが子孫のためにも恵まれし自由と独立を保持しようと決意した。
          そのため、我が国民は法律に基づき、わが国憲法にのっとり、正義と秩序を守り、国際社会に貢献してまいります。また、心豊かな文化と伝統を尊重し、自らの努力によって社会に貢献し、永続的な繁栄を築くことを誓います。
       </p>
      </div>
      <section className="tattoos">
        <div className="tattoo-grid">
          {Tattoos.map((Tattoos) => (
            <article key={Tattoos.id} className="tattoo-item">
              <div className='tattoo-image'>
                <img
                  src={"/images/" + Tattoos.id + ".jpg"}
                  alt="Image of the project"
                />
              </div>
              <h3>{Tattoos.name}</h3>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
};
