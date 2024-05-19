import React, { useEffect } from 'react'
import './QB.css'

export default function QB() {
    let AccordinBarQB=()=>{
        let accordionItems=document.querySelectorAll('.questions_item > li')
        accordionItems.forEach((item)=>{

            item.onclick=(e)=>{
                accordionItems.forEach((ele)=>{
                    ele.classList.remove("on");
                    ele.children[0].setAttribute('class','fa fa-angle-down');
                })

                item.classList.add('on');
                item.children[0].setAttribute('class','fa fa-angle-up');

            }
        })
        
    }
    let ChooseMainBenefit=()=>{
        let allBtns=document.querySelectorAll('.benefits_btns > button');
        let allDoms=document.querySelectorAll('.benefits_data > .bf')
        let mainDom=document.querySelector('.main_data');
        let mainBtn=document.querySelector('.main_btn');
        allBtns.forEach((btn)=>{
            btn.classList.remove("activeB");
           
        })
        allDoms.forEach((dom)=>{
            dom.classList.remove("activeBF");
        })

        mainDom.classList.add("activeBF");
        mainBtn.classList.add("activeB");
    
    }
    let ChooseDoBenefit=()=>{
        let allBtns=document.querySelectorAll('.benefits_btns > button');
        let allDoms=document.querySelectorAll('.benefits_data > .bf')
        let doDom=document.querySelector('.do_data');
        let doBtn=document.querySelector('.do_btn');
        allBtns.forEach((btn)=>{
            btn.classList.remove("activeB");
        })
        allDoms.forEach((dom)=>{
            dom.classList.remove("activeBF");
        })
        doDom.classList.add("activeBF");
        doBtn.classList.add("activeB");


    }
    let ChooseGuarrantessBenefit=()=>{
        let allBtns=document.querySelectorAll('.benefits_btns > button');
        let allDoms=document.querySelectorAll('.benefits_data > .bf')
        let guarrantessDom=document.querySelector('.guarrantess_data');
        let guarrantessBtn=document.querySelector('.guarrantess_btn');
        allBtns.forEach((btn)=>{
            btn.classList.remove("activeB");
        })
        allDoms.forEach((dom)=>{
            dom.classList.remove("activeBF");
        })
        guarrantessDom.classList.add("activeBF");
        guarrantessBtn.classList.add("activeB");
 

    }

    useEffect(()=>{
        AccordinBarQB();
    })
  return (
    <section className='qb'>
      <div className='container'>
        <div className='qg_items'>
            <div className='qg_item questions'>
                <h2 className='questions_title'>Frequently Asked <span>Questions</span></h2>
                <p className='questions_desc'>The Scrate Education degree is equal in academic standard to a degree from any other university.</p>
                <hr />
                <div className='questions_items'>
                    <div className='questions_item'>
                            <li className='on'><i className="fa fa-angle-up" aria-hidden="true"></i>Why should I join your team</li>
                            <p>Donec tortor sapien, pellentesque sed tortor ut, vehicula luctus nibh. Nullam id faucibus risus. Nullam volutpat venenatis libero, sit amet mattis ipsum rutrum in.</p>
                        </div>
                        <div className='questions_item'>
                            <li><i className="fa fa-angle-down" aria-hidden="true"></i>What would you gain on your team?</li>
                            <p>Donec tortor sapien, pellentesque sed tortor ut, vehicula luctus nibh. Nullam id faucibus risus. Nullam volutpat venenatis libero, sit amet mattis ipsum rutrum in.</p>
                        </div>
                        <div className='questions_item'>
                            <li><i className="fa fa-angle-down" aria-hidden="true"></i>How can I give support for students?</li>
                            <p>Donec tortor sapien, pellentesque sed tortor ut, vehicula luctus nibh. Nullam id faucibus risus. Nullam volutpat venenatis libero, sit amet mattis ipsum rutrum in.</p>
                        </div>
                        <div className='questions_item'>
                            <li><i className="fa fa-angle-down" aria-hidden="true"></i>How many days I need to work?</li>
                            <p >Donec tortor sapien, pellentesque sed tortor ut, vehicula luctus nibh. Nullam id faucibus risus. Nullam volutpat venenatis libero, sit amet mattis ipsum rutrum in.</p>
                        </div>
                        <div className='questions_item'>
                            <li><i className="fa fa-angle-down" aria-hidden="true"></i>Where I need to join the team?</li>
                            <p >Donec tortor sapien, pellentesque sed tortor ut, vehicula luctus nibh. Nullam id faucibus risus. Nullam volutpat venenatis libero, sit amet mattis ipsum rutrum in.</p>
                        </div>
                </div>
            </div>
            <div className='qb_benefits benefits'>
                <h2 className='benefits_title'>Perks & <span>Benefits</span></h2>
                <p className='benefits_desc'>The Scrate Education degree is equal in academic standard to a degree from any other university.</p>
                <hr />
                <div className='benefits_content'>
                    <div className='benefits_btns'>
                        <button className='main_btn activeB' onClick={ChooseMainBenefit}>benefits</button>
                        <button className='do_btn' onClick={ChooseDoBenefit}>What we do</button>
                        <button className='guarrantess_btn' onClick={ChooseGuarrantessBenefit}>guarrantess</button>
                    </div>

                    <div className='benefits_data'>
                        <div className='main_data bf activeBF'>
                            <p className='benefits_data_desc'>Changing the world is easier when you’re happy, healthy, rested, and fed. To that end, we provide:</p>
                            <ul className='benefits_data_list'>
                                <li>Comprehensive medical, dental, and vision coverage</li>
                                <li>Delicious lunch, dinner, and snacks every day</li>
                                <li>Open vacation policy – take time off when you need it</li>
                                <li>Competitive salary and meaningful equity</li>
                            </ul>
                        </div>
                        <div className='do_data bf'>
                            <p className='do_data_desc'>We provide an advanced level of education using the best tools, which helps us in providing:</p>
                            <ul className='do_data_list'>
                                <li>Striving to reach the maximum levels of learning</li>
                                <li>Continuous follow-up using the latest methods</li>
                                <li>Conduct sufficient tests to ensure educational sufficiency</li>
                                <li>Giving certificates and evaluations for each level</li>
                            </ul>
                        </div>
                        <div className='guarrantess_data bf'>
                            <p className='guarrantess_data_desc'>We guarantee that you will reach full saturation of education in any of our courses, as we guarantee you:</p>
                            <ul className='guarrantess_data_list'>
                                <li>Applying the latest approaches in e-learning</li>
                                <li>Possession of the necessary skills intended for any course</li>
                                <li>Ensure that complete knowledge is achieved</li>
                                <li>Optimal implementation of the education we have provided</li>
                            </ul>
                        </div>

                    </div>
                </div>
            </div>
        </div>
      </div>
    </section>
  )
}
