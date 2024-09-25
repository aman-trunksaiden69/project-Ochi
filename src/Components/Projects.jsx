import React, { useEffect, useState } from 'react'

function Projects() {

    
  useEffect(() => {
   


   

const $ = (e, p = document) => p.querySelector(e);
const $$ = (e, p = document) => p.querySelectorAll(e);

function animateSvg(targets, options = {}) {    
    const defaultOptions = {
        ease: "elastic.out(1,0.3)",
        duration: 2,
        offsetLeft: 0,
        offsetRight: 0,
        xMultiplier: 1,
        yMultiplier: 1
    };

    const {
        ease,
        duration,
        offsetLeft,
        offsetRight,
        xMultiplier,
        yMultiplier
    } = { ...defaultOptions, ...options };

    const trg = gsap.utils.toArray(targets);

    if (trg.length === 0) {
        console.error("No valid targets found to animate.");
        return;
    }

    trg.forEach(target => {
        const targetElements = gsap.utils.toArray(target);

        if (targetElements.length === 0) {
            console.error(`No elements found for target: ${target}`);
            return;
        }

        targetElements.forEach(element => {
            const { height: sh, width: sw } = element.getBoundingClientRect();
            const path = $('path', element);

            if (!path) {
                console.error("No 'path' element found inside the target.");
                return;
            }

            // Set initial path
            const initialPath = `M${offsetLeft},${sh / 2} Q${sw / 2},${sh / 2} ${sw - offsetRight},${sh / 2}`;
            gsap.set(path, { attr: { d: initialPath } });

            const mapY = gsap.utils.mapRange(0, sh, -sh * (yMultiplier - 1), sh * yMultiplier);
            const mapX = gsap.utils.mapRange(0, sw, -sw * (xMultiplier - 1), sw * xMultiplier);

            // Update path on mousemove
            element.onmousemove = e => {
                const y = mapY(e.offsetY);
                const x = mapX(e.offsetX);
                const newPath = `M${offsetLeft},${sh / 2} Q${x},${y} ${sw - offsetRight},${sh / 2}`;

                gsap.to(path, {
                    attr: { d: newPath },
                    ease: "expo",
                });
            };

            // Reset path on mouseleave
            element.onmouseleave = () => {
                gsap.to(path, {
                    attr: { d: initialPath },
                    duration: duration,
                    ease: ease,
                });
            };
        });
    });
}

function makeSticky(elementToHover, elementToMove, magnitude = 0.5, ease) {    
    elementToHover.addEventListener('mousemove', (e) => {
        const x = (e.offsetX - elementToHover.clientWidth / 2) * magnitude;
        const y = (e.offsetY - elementToHover.clientHeight / 2) * magnitude;

        gsap.to(elementToMove, { x, y });
    });

    elementToHover.addEventListener('mouseleave', () => {
        gsap.to(elementToMove, {
            x: 0,
            y: 0,
            ease: ease || 'elastic',
            duration: 1.2
        });
    });
}


// Default f(x)
animateMagnets();

function animateMagnets() {
    if (typeof gsap === 'undefined') {
        console.error("GSAP is not defined. Make sure to include GSAP library.");
        return;
    }
    
    const magnets = $$('[data-make-sticky]');
    
    magnets.forEach(magnet => {
        const childId = magnet.dataset.makeSticky;
        const children = $$(childId, magnet);

        const parentMag = magnet.dataset.stickyMagnitude || 0.5;

        makeSticky(magnet, magnet, parentMag);

        children.forEach(child => {
            child.style.pointerEvents = 'none';
            const childMag = child.dataset.stickyMagnitude || 0.3;

            makeSticky(magnet, child, childMag);
        })
    })
}
  });
  

  return (
    <div className='relative w-full h-[140vh] bg-[#CDEA68] flex-col items-center justify-center flex'>
        {["ready", "to start", "the project?"].map((item, index) =>{
            return <h1 key={index} className='text-[17vw] leading-[13vw] text-center text-[#212121] flex flex-col font-["Founders"] uppercase'>
                      {item}
                  </h1>
        })}

      <div className='w-full flex flex-col items-center gap-5 mt-20'>
        <div className='buttondiv relative w-full'>
            <button className='btn3 absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] flex gap-5 items-center text-[1.1vw] font-medium font-["NeueMontreal"] px-6 rounded-full py-4 tracking-normal uppercase bg-[#212121] text-[#F1F1F1]'>
                <h2 className='z-[9]'>start the project</h2>
                <div className='circle w-2 h-2 rounded-full flex items-center justify-center bg-white'>
                  <i className="ri-arrow-up-line"></i>
                </div>
            </button>
        </div>

        <h1 className='text-lg text-[#212121] font-["gilroy"] uppercase'>or</h1>

        <div className='bbt relative w-full'>
            <button className='btn8 absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] flex gap-5 items-center text-[1.1vw] font-medium font-["NeueMontreal"] px-6 rounded-full py-4 tracking-normal uppercase text-[#212121] border-[1px] border-[#212121]'>
                <h2 className='z-[9]'>hello@ochi.design</h2>
                <div className='circle w-2 h-2 rounded-full flex items-center justify-center bg-[#212121]'>
                  <i className="ri-arrow-up-line"></i>
                </div>
            </button>
        </div>
      </div>

        <div data-make-sticky="#children" className='flex items-center justify-center gap-10 absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]'>
          <div id='children' data-scroll data-scroll-speed=".3"  className='flex items-center justify-center w-[13vw] h-[13vw] rounded-full bg-zinc-100'>
          <div className='relative w-2/3 h-2/3 rounded-full bg-zinc-950'>
          <div style={{transform: `translate(-50%, -50%)`}} className='line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-10'>
          <div className='w-4 h-4 rounded-full bg-zinc-100'></div>
          </div>
          </div>
          </div>
          <div data-scroll data-scroll-speed=".3" data-make-sticky="#children" className='flex items-center justify-center w-[13vw] h-[13vw] rounded-full bg-zinc-100'>
          <div id='children' className='relative w-2/3 h-2/3 rounded-full bg-zinc-950'>
          <div style={{transform: `translate(-50%, -50%)`}} className='line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-10'>
          <div className='w-4 h-4 rounded-full bg-zinc-100'></div>
          </div>
          </div> 
          </div>
         </div>

    </div>

  )
}

export default Projects