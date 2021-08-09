const field = document.createElement("input");
field.setAttribute("type", "date");
field.name = "date";

const button = document.createElement("button");
button.innerText = "Submit";
button.setAttribute("class", "btn btn-primary");
button.setAttribute("onclick", "foo()");
button.onclick = function () {
  foo();
};
const msinfo = document.createElement("p");
const sinfo = document.createElement("p");
const minfo = document.createElement("p");
const hinfo = document.createElement("p");
const dinfo = document.createElement("p");
const winfo = document.createElement("p");
const mninfo = document.createElement("p");
const yinfo = document.createElement("p");

const maindiv = document.createElement("div");
document.body.append(field, button);

function foo() {
  let time = new Date();
  let input = new Date(Date.parse(field.value));
  let msec = time.getTime() - input.getTime();
  msinfo.innerText = `Milliseconds you spent => ${msec}`;

  console.log(time, input);

  let sec = msec / 1000;
  sinfo.innerText = `Seconds you spent => ${Math.floor(sec)}`;

  let min = sec / 60;
  minfo.innerText = `Minutes you spent => ${Math.round(min)}`;

  let hrs = min / 60;
  hinfo.innerText = `Hours you spent => ${Math.floor(hrs)}`;

  let day = hrs / 24;
  dinfo.innerText = `Days you spent => ${Math.round(day)}`;

  let week = day / 7;
  winfo.innerText = `Weeks you spent => ${Math.round(week)}`;

  let yrs = time.getFullYear() - input.getFullYear();
  yinfo.innerText = `Years you spent => ${yrs}`;

  let mth = yrs * 12 + (time.getMonth() - input.getMonth());
  mninfo.innerText = `Months you spent => ${mth}`;

  maindiv.append(msinfo, sinfo, minfo, hinfo, dinfo, winfo, mninfo, yinfo);
  document.body.append(maindiv);
}
