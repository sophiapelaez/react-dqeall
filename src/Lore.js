import React from 'react';
import { useState } from 'react';

function handleMouseEnter() {
  document.getElementById('img').style.opacity = '0.5';
}

function handleMouseLeave() {
  document.getElementById('img').style.opacity = '1';
}

function handleMouseEnter2() {
  document.getElementById('img2').style.opacity = '0.5';
}

function handleMouseLeave2() {
  document.getElementById('img2').style.opacity = '1';
}

function handleMouseEnter3() {
  document.getElementById('img3').style.opacity = '0.5';
}

function handleMouseLeave3() {
  document.getElementById('img3').style.opacity = '1';
}

function handleMouseEnter4() {
  document.getElementById('img4').style.opacity = '0.5';
}

function handleMouseLeave4() {
  document.getElementById('img4').style.opacity = '1';
}

function handleMouseEnter5() {
  document.getElementById('img5').style.opacity = '0.5';
}

function handleMouseLeave5() {
  document.getElementById('img5').style.opacity = '1';
}

export default function Lore() {
  return (
    <div className="lore">
      <p id="lore-title">
        {' '}
        F<span id="space">__</span> I<span id="space">__</span> R
        <span id="space">__</span>E<span id="space">__</span> T
        <span id="space">__</span>R<span id="space">__</span>U
        <span id="space">__</span>C<span id="space">__</span>K{' '}
      </p>
      <div className="lore-things">
        <a href="https://www.youtube.com/watch?v=_psXn_VJ_AE">
          {' '}
          <img
            id="img"
            src="https://pbs.twimg.com/media/FjVATb9UcAAEAp9?format=jpg&name=medium"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          />
        </a>
        <p id="lore-text">
          {' '}
          NCT 127 debuted as a subunit of NCT in the July of 2016 with the song
          "Firetruck." A bit of a a silly song if I say so myself. The song was
          performed by the seven original members of NCT 127: Taeil, Taeyong,
          Yuta, Jaehyun, Winwin, Mark and Haechan.
        </p>
      </div>

      <p id="lore-title">
        {' '}
        L<span id="space">__</span>I<span id="space">__</span>M
        <span id="space">__</span>I<span id="space">__</span> T
        <span id="space">__</span>L<span id="space">__</span>E
        <span id="space">__</span>S<span id="space">__</span>S{' '}
      </p>
      <div className="lore-things">
        <a href="https://www.youtube.com/watch?v=zmUn7V6uuZM">
          <img
            id="img2"
            src="https://pbs.twimg.com/media/FjVAbIBVIAER0Me?format=jpg&name=medium"
            onMouseEnter={handleMouseEnter2}
            onMouseLeave={handleMouseLeave2}
          />
        </a>
        <p id="lore-text">
          {' '}
          The band returned with a new mini-album and new members. Released in
          the Februrary of 2017, the EP entitled "Limitless," its title track
          going by the same name. The comeback ntroduced new members Johnny and
          Doyoung. The title track is the best song ever.
        </p>
      </div>

      <p id="lore-title">
        {' '}
        T<span id="space">__</span>O<span id="space">__</span>U
        <span id="space">__</span>C<span id="space">__</span>H{' '}
      </p>
      <div className="lore-things">
        <a href="https://www.youtube.com/watch?v=6sHIq41sI-w">
          <img
            id="img3"
            src="https://pbs.twimg.com/media/FjVBjuxUAAAxll3?format=jpg&name=medium"
            onMouseEnter={handleMouseEnter3}
            onMouseLeave={handleMouseLeave3}
          />
        </a>
        <p id="lore-text">
          {' '}
          NCT 127 is a subunit of the ever-growing group NCT. NCT has an
          "infinite members" concept---meaning, at any time, new members can be
          added into the group as a whole, there is no set lineup. These members
          are then put into smaller subunits, NCT 127 being one of the group's
          four sub units. In 2018, the group released their first full album,
          "Empathy," which included songs from all of the group's subunits. For
          127's song, the subunit released lighthearted and silly fun song named
          "Touch." The change in concept was one for the books, one could say.
        </p>
      </div>

      <p id="lore-title">
        {' '}
        R<span id="space">__</span>E<span id="space">__</span>G
        <span id="space">__</span>U<span id="space">__</span>L
        <span id="space">__</span>A<span id="space">__</span>R
      </p>
      <div className="lore-things">
        <a href="https://www.youtube.com/watch?v=gj-VU9oK2Yo">
          <img
            id="img4"
            src="https://pbs.twimg.com/media/FjVBl5UUUAAJU09?format=jpg&name=medium"
            onMouseEnter={handleMouseEnter4}
            onMouseLeave={handleMouseLeave4}
          />
        </a>
        <p id="lore-text">
          {' '}
          NCT 127 claimed they were "getting the bag on the regular," per the
          lyrics of this song. At this point in time that was simply not true.
          In 2018, NCT released the song "Regular," which they released in both
          English and Korean. This comeback would introduce the newest member of
          the subunit: Jungwoo. Important to note, the subunit would soon see
          WinWin, one of the original members, going on a hiatus from the
          subunit, and instead becoming an active member of the group's
          China-based subunit, WayV.{' '}
        </p>
      </div>

      <p id="lore-title">
        {' '}
        K<span id="space">__</span>I<span id="space">__</span>C
        <span id="space">__</span>K<span id="space">__</span>
        <span id="space">__</span>I<span id="space">__</span>T
      </p>
      <div className="lore-things">
        <a href="https://www.youtube.com/watch?v=2OvyA2__Eas">
          <img
            id="img5"
            src="https://pbs.twimg.com/media/FjVBqekVIAEHt4x?format=jpg&name=medium"
            onMouseEnter={handleMouseEnter5}
            onMouseLeave={handleMouseLeave5}
          />
        </a>
        <p id="lore-text">
          {' '}
          And finally...the prophecy that was foretold. They are getting the bag
          on the regular. Released in 2020 at the dawn of the pandemic, NCT 127
          released one of their biggest songs to date: Kick It.
        </p>
      </div>
    </div>
  );
}
