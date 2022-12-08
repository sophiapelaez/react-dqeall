import React from 'react';
import { useState } from 'react';
import Profile from './PopUp';

export default function Members() {
  const [taeilPopUp, setTaeilPopUp] = useState(false);
  const [johnnyPopUp, setJohnnyPopUp] = useState(false);
  const [taeyongPopUp, setTaeyongPopUp] = useState(false);
  const [yutaPopUp, setYutaPopUp] = useState(false);
  const [doyoungPopUp, setDoyoungPopUp] = useState(false);
  const [jaehyunPopUp, setJaehyunPopUp] = useState(false);
  const [jungwooPopUp, setJungwooPopUp] = useState(false);
  const [markPopUp, setMarkPopUp] = useState(false);
  const [haechanPopUp, setHaechanPopUp] = useState(false);
  const [buttonPopUp, setButtonPopUp] = useState(false);
  return (
    <div className="members">
      <h1 id="member-database">
        {' '}
        M<span id="space">__</span> E<span id="space">__</span> M
        <span id="space">__</span> B<span id="space">__</span> E
        <span id="space">__</span> R<span id="space">__</span> S{' '}
      </h1>

      <p id="member-text-intro"> Click on each member to learn more </p>
      <div className="members-part-one">
        <img
          id="taeil_profile"
          src="https://uscwebdev.github.io/itp301-submissions-sophiapelaez/assignment_08/TAEIL_1.png"
          alt="Moon Taeil"
          onClick={() => setTaeilPopUp(true)}
        />

        <Profile trigger={taeilPopUp} setTrigger={setTaeilPopUp}>
          <div class="profile-photo">
            <img id="profile-img" src="https://uscwebdev.github.io/itp301-submissions-sophiapelaez/assignment_08/TAEIL_1.png"/>
          </div>
          <div class="profile-text">
            <h1 id="profile-name"> Moon Taeil </h1>
            <h1 id="profile-name"> 문태일 </h1>
            <p id="profile-description"> June 14, 1994 </p>
            <p id="profile-description"> Seoul, South Korea</p>
            <p id="profile-description"> Main Vocalist </p>
            <a href="https://www.youtube.com/watch?v=mRwxB2AW5HA" id="profile-link"> <p id="profile-description"> Purple </p> </a>
          </div>
        </Profile>


        <img
          id="johnny_profile"
          src="https://uscwebdev.github.io/itp301-submissions-sophiapelaez/assignment_08/JOHNNY_1.png"
          alt="Suh Johnny"
          onClick={() => setJohnnyPopUp(true)}
          />
          <Profile trigger={johnnyPopUp} setTrigger={setJohnnyPopUp}>
          <div class="profile-photo">
            <img id="profile-img" src="https://uscwebdev.github.io/itp301-submissions-sophiapelaez/assignment_08/JOHNNY_1.png"/>
          </div>
          <div class="profile-text">
            <h1 id="profile-name"> Johnny Suh </h1>
            <h1 id="profile-name"> 서쟈니 </h1>
            <p id="profile-description"> February 9, 1995</p> 
            <p id="profile-description">  Chicago, Illinois, USA</p>
            <p id="profile-description"> Lead Dancer | Sub Rapper | Sub Vocalist </p>
            <a href="https://www.teenvogue.com/story/nct-johnny-suh-met-gala-2022-red-carpet" id="profile-link"> <p id="profile-description"> Met Gala Debut </p> </a>
          </div>
        </Profile>


        <img
          id="taeyong_profile"
          src="https://uscwebdev.github.io/itp301-submissions-sophiapelaez/assignment_08/TAEYONG_1.png"
          alt="Lee Taeyong"
          onClick={() => setTaeyongPopUp(true)}
        />
        </div>
        <Profile trigger={taeyongPopUp} setTrigger={setTaeyongPopUp}>
          <div class="profile-photo">
            <img id="profile-img" src="https://uscwebdev.github.io/itp301-submissions-sophiapelaez/assignment_08/TAEYONG_1.png"/>
          </div>
          <div class="profile-text">
            <h1 id="profile-name"> Lee Taeyong </h1>
            <h1 id="profile-name"> 이태용 </h1>
            <p id="profile-description"> July 1, 1995</p>
            <p id="profile-description"> Seoul, South Korea</p>
            <p id="profile-description"> Leader  | Main Rapper | Main Dancer | Sub Vocalist</p>
            <a href="https://www.youtube.com/watch?v=SvV49SD99DY" id="profile-link"> <p id="profile-description"> Long Flight </p> </a>
          </div>
        </Profile>


      <div className="members-part-two">
        <img
          id="yuta_profile"
          src="https://uscwebdev.github.io/itp301-submissions-sophiapelaez/assignment_08/YUTA_1.png"
          alt="Nakamoto Yuta"
          onClick={() => setYutaPopUp(true)}
        />
        <Profile trigger={yutaPopUp} setTrigger={setYutaPopUp}>
          <div class="profile-photo">
            <img id="profile-img" src="https://uscwebdev.github.io/itp301-submissions-sophiapelaez/assignment_08/YUTA_1.png"/>
          </div>
          <div class="profile-text">
            <h1 id="profile-name"> Nakamoto Yuta </h1>
            <h1 id="profile-name"> 中本悠太 </h1>
            <p id="profile-description"> October 26, 1995 </p>
            <p id="profile-description"> Osaka, Japan </p>
            <p id="profile-description"> Lead Dancer | Sub Vocalist | Sub Rapper</p>
          </div>
        </Profile>


        <img
          id="doyoung_profile"
          src="https://uscwebdev.github.io/itp301-submissions-sophiapelaez/assignment_08/DOYOUNG_1.png"
          alt="Kim Doyoung"
          onClick={() => setDoyoungPopUp(true)}
        />
        <Profile trigger={doyoungPopUp} setTrigger={setDoyoungPopUp}>
          <div class="profile-photo">
            <img id="profile-img" src="https://uscwebdev.github.io/itp301-submissions-sophiapelaez/assignment_08/DOYOUNG_1.png"/>
          </div>
          <div class="profile-text">
            <h1 id="profile-name"> Kim Doyoung 김도영</h1>
            <h1 id="profile-name"> 김도영</h1>
            <p id="profile-description"> February 1, 1996</p>
            <p id="profile-description"> Seoul, South Korea</p>
            <p id="profile-description"> Main Vocalist </p>
            <a href="https://www.youtube.com/watch?v=lpv-mkmddms" id="profile-link"> <p id="profile-description"> Star Blossom </p> </a>
          </div>
        </Profile>

        <img
          id="jaehyun_profile"
          src="https://uscwebdev.github.io/itp301-submissions-sophiapelaez/assignment_08/JAEHYUN_1.png"
          alt="Jeong Jaehyun"
          onClick={() => setJaehyunPopUp(true)}
        />
        <Profile trigger={jaehyunPopUp} setTrigger={setJaehyunPopUp}>
          <div class="profile-photo">
            <img id="profile-img" src="https://uscwebdev.github.io/itp301-submissions-sophiapelaez/assignment_08/JAEHYUN_1.png" />
          </div>
          <div class="profile-text">
            <h1 id="profile-name"> Jeong Jaehyun </h1>
            <h1 id="profile-name"> 정재현 </h1>
            <p id="profile-description"> February 14, 1997 </p>
            <p id="profile-description"> Seoul, South Korea </p>
            <p id="profile-description"> Main Vocalist | Lead Dancer | Sub Rapper </p>
            <a href="https://www.youtube.com/watch?v=WOuGFam9Lg8" id="profile-link"> <p id="profile-description"> Forever Only</p> </a>
          </div>
        </Profile>
      </div>


      <div className="members-part-three">
        <img
          id="jungwoo_profile"
          src="https://uscwebdev.github.io/itp301-submissions-sophiapelaez/assignment_08/JUNGWOO_1.png"
          alt="Kim Jungwoo"
          onClick={() => setJungwooPopUp(true)}
        />
         <Profile trigger={jungwooPopUp} setTrigger={setJungwooPopUp}>
          <div class="profile-photo">
            <img id="profile-img" src="https://uscwebdev.github.io/itp301-submissions-sophiapelaez/assignment_08/JUNGWOO_1.png" />
          </div>
          <div class="profile-text">
            <h1 id="profile-name"> Kim Jungwoo </h1>
            <h1 id="profile-name"> 김정우 </h1>
            <p id="profile-description">  February 19, 1998</p>
            <p id="profile-description"> Seoul, South Korea </p>
            <p id="profile-description"> Lead Vocalist | Lead Dancer</p>
          </div>
        </Profile>


        <img
          id="mark_profile"
          src="https://uscwebdev.github.io/itp301-submissions-sophiapelaez/assignment_08/MARK_1.png"
          alt="Lee Mark"
          onClick={() => setMarkPopUp(true)}
        />  
         <Profile trigger={markPopUp} setTrigger={setMarkPopUp}>
          <div class="profile-photo">
            <img id="profile-img" src="https://uscwebdev.github.io/itp301-submissions-sophiapelaez/assignment_08/MARK_1.png"/>
          </div>
          <div class="profile-text">
            <h1 id="profile-name"> Lee Mark </h1>
            <h1 id="profile-name"> 이마크 </h1>
            <p id="profile-description"> August 2, 1999</p>
            <p id="profile-description"> Toronto, Canada</p>
            <p id="profile-description"> Main Rapper | Main Dancer | Sub Vocalist</p>
            <a href="https://www.youtube.com/watch?v=VbIf3z2SqHg" id="profile-link"> <p id="profile-description"> Child </p> </a>
          </div>
        </Profile>


        <img
          id="haechan_profile"
          src="https://uscwebdev.github.io/itp301-submissions-sophiapelaez/assignment_08/HAECHAN_1.png"
          alt="Lee Haechan"
          onClick={() => setHaechanPopUp(true)}
        />
         <Profile trigger={haechanPopUp} setTrigger={setHaechanPopUp}>
          <div class="profile-photo">
            <img id="profile-img" src="https://uscwebdev.github.io/itp301-submissions-sophiapelaez/assignment_08/HAECHAN_1.png"/>
          </div>
          <div class="profile-text">
            <h1 id="profile-name"> Lee Haechan </h1>
            <h1 id="profile-name"> 이해찬 </h1>
            <p id="profile-description"> June 6, 2000</p>
            <p id="profile-description"> Seoul, South Korea</p>
            <p id="profile-description"> Main Vocalist | Lead Dancer</p>
            <a href="https://www.youtube.com/watch?v=MMJ_uIw02U8" id="profile-link"> <p id="profile-description"> Good Person </p> </a>
          </div>
        </Profile>
      </div>
    </div>
  );
}

export default Members