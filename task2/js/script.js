'use strict';

const body = document.querySelector("body");
  body.style.fontFamily = "Arial";

const style = document.querySelector("style");
  console.log(style);
//header section
const header = document.createElement("header");
  header.style.minHeight = "100px";
  
const header_wrapper = document.createElement("div");
  header_wrapper.classList = "wrapper";

const header_maintext = document.createElement("h1");
  header_maintext.classList = "header_maintext";
    header_maintext.textContent = "Choose Your Option";
    header_maintext.style.textAlign = "center";
    header_maintext.style.fontSize = "36px";
    header_maintext.style.fontWeight = "500";

const header_dscr = document.createElement("h2");
  header_dscr.classList = "header_dscr";
    header_dscr.textContent = "But I must explain to you how all this mistaken idea of denouncing ";
    header_dscr.style.textAlign = "center";
    header_dscr.style.fontSize = "14px";
    header_dscr.style.fontWeight = "400";
    header_dscr.style.color = "gray";

header_wrapper.appendChild(header_maintext);
header_wrapper.appendChild(header_dscr);

header.appendChild(header_wrapper);
document.body.append(header);

//blocks section
const blocks = document.createElement("section");
  blocks.classList = "blocks";
    blocks.style.minHeight = "480px";
    blocks.style.marginTop = "50px";
    blocks.style.position = "relative";

const blocks_wrapper = document.createElement("div");
  blocks_wrapper.classList = "wrapper";
    blocks_wrapper.style.height = "480px";
    blocks_wrapper.style.width = "805px";
    blocks_wrapper.style.position = "absolute";
    blocks_wrapper.style.left = "50%";
    blocks_wrapper.style.transform = "translateX(-50%)";
    blocks_wrapper.style.borderRadius = "10px";
    blocks_wrapper.style.display = "flex";
    blocks_wrapper.style.overflow = "hidden";
    blocks_wrapper.style.borderColor = "#999"
    blocks_wrapper.style.borderWidth = "1px";
    blocks_wrapper.style.borderStyle = "solid";

for(let i = 0; i < 2; i++){
  const grayColor = "#9FA3A7";
  const goldColor = "#FFC80A";

  const wrapper_element = document.createElement("div");
    wrapper_element.classList = "element";
      wrapper_element.style.height = "100%";
      wrapper_element.style.width = "50%";
      wrapper_element.style.position = "relative";

  const block_header = document.createElement("div");
    block_header.classList = "block_header";
    block_header.style.textAlign = "#FFC80A"
    block_header.style.fontSize = "12px";
    block_header.style.fontWeight = "700";
    block_header.style.textAlign = "center";
    block_header.style.marginTop = "80px";
    block_header.style.letterSpacing = "2px";

  const block_text = document.createElement("div");
    block_text.classList = "block_text";
    block_text.innerHTML = "Initially <br /> designed to ";
    block_text.style.fontSize = "36px";
    block_text.style.fontWeight = "400";
    block_text.style.textAlign = "center";
    block_text.style.marginTop = "15px";

  const block_descr = document.createElement("div");
    block_descr.classList = "block_descr";
    block_descr.innerHTML = "But I must explain to you how all this <br /> mistaken idea of denouncing";
    block_descr.style.fontSize = "12px";
    block_descr.style.fontWeight = "400";
    block_descr.style.textAlign = "center";
    block_descr.style.marginTop = "25px";
    block_descr.style.lineHeight = "22px";

  const block_btn = document.createElement("button");
    block_btn.classList = "btn btn_" + (i + 1);
    block_btn.textContent = "start here";

  if (!i) {//for first element
    wrapper_element.style.backgroundColor = "#fff";

    block_header.textContent = "FREELANCER";
    block_header.style.color = grayColor;

    block_text.style.color = "#000";

    block_descr.style.color = grayColor;
  } else {//for second element
    wrapper_element.style.backgroundColor = "#8F75BE";

    block_header.textContent = "STUDIO";
    block_header.style.color = goldColor;

    block_text.style.color = "#fff";

    block_descr.style.color = "#fff";
  }

  
  wrapper_element.appendChild(block_header);
  wrapper_element.appendChild(block_text);
  wrapper_element.appendChild(block_descr);
  wrapper_element.appendChild(block_btn);
  blocks_wrapper.appendChild(wrapper_element); 
}

style.innerHTML += `
  .btn{
    width: 145px;
    height: 45px;
    margin-bottom: 90px;
    position: absolute;
    left: 50%;
    bottom: 0%;
    transform: translateX(-50%);
    background: none;
    border: 3px solid #FFC80A;
    border-radius: 30px;
    text-transform: uppercase;
    font-size: 12px;
    font-weight: 700;
    transition: 0.5s all;
  }
  
  .btn:hover{
    cursor: pointer;
    font-size: 14px;
  }

  .btn_2{
    color: #fff;
  }
`;

blocks.appendChild(blocks_wrapper);
document.body.append(blocks);