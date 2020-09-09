const han = document.getElementById("한"),
  du = document.getElementById("두"),
  se = document.getElementById("세"),
  ne = document.getElementById("네"),
  da = document.getElementById("다"),
  set = document.getElementById("섯"),
  yo = document.getElementById("여"),
  set2 = document.getElementById("섯2"),
  il = document.getElementById("일"),
  gob = document.getElementById("곱"),
  yo2 = document.getElementById("여2"),
  deb = document.getElementById("덟"),
  a = document.getElementById("아"),
  hop = document.getElementById("홉"),
  yol = document.getElementById("열"),
  han2 = document.getElementById("한2"),
  du2 = document.getElementById("두2"),
  si = document.getElementById("시"),
  ja = document.getElementById("자"),
  yee = document.getElementById("이"),
  sam = document.getElementById("삼"),
  sa = document.getElementById("사"),
  oh = document.getElementById("오"),
  sib = document.getElementById("십"),
  jung = document.getElementById("정"),
  il2 = document.getElementById("일2"),
  yee2 = document.getElementById("이2"),
  sam2 = document.getElementById("삼2"),
  sa4 = document.getElementById("사2"),
  yuk = document.getElementById("육"),
  oh2 = document.getElementById("오2"),
  oh3 = document.getElementById("오3"),
  chil = document.getElementById("칠"),
  pal = document.getElementById("팔"),
  gu = document.getElementById("구"),
  bun = document.getElementById("분");

function onClock() {
  let date = new Date();
  let hours = date.getHours();
  let minutes = date.getMinutes();

  if (hours > 12) {
    hours = hours - 12;
  }
  switch (hours) {
    case 1:
      yol.setAttribute("class","");
      du2.setAttribute("class", "");
      han.setAttribute("class", "on");
      break;
    case 2:
      han.setAttribute("class", "");
      du.setAttribute("class", "on");
      break;
    case 3:
      du.setAttribute("class", "");
      se.setAttribute("class", "on");
      break;
    case 4:
      se.setAttribute("class", "");
      ne.setAttribute("class", "on");
      break;
    case 5:
      ne.setAttribute("class", "");
      da.setAttribute("class", "on");
      set.setAttribute("class", "on");
      break;
    case 6:
      da.setAttribute("class", "");
      set.setAttribute("class", "");
      yo.setAttribute("class", "on");
      set2.setAttribute("class", "on");
      break;
    case 7:
      yo.setAttribute("class", "");
      set2.setAttribute("class", "");
      il.setAttribute("class", "on");
      gob.setAttribute("class", "on");
      break;
    case 8:
      il.setAttribute("class", "");
      gob.setAttribute("class", "");
      yo2.setAttribute("class", "on");
      deb.setAttribute("class", "on");
      break;
    case 9:
      yo2.setAttribute("class", "");
      deb.setAttribute("class", "");
      a.setAttribute("class", "on");
      hop.setAttribute("class", "on");
      break;
    case 10:
      a.setAttribute("class", "");
      hop.setAttribute("class", "");
      yol.setAttribute("class", "on");
      break;
    case 11:
      han2.setAttribute("class", "on");
      break;
    case 12:
      han2.setAttribute("class", "");
      du2.setAttribute("class", "on");
      break;
  }
  console.log(hours, minutes);
}

setInterval(onClock, "1000");
