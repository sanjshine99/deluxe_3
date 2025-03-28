import React, { useState, useCallback } from 'react';
import './Specsmenu.css';

const Specs19 = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = useCallback(
    (index) => {
      setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
    },
    [setActiveIndex]
  );
    const data = [
      {
        title: 'INTERIOR',
        content: `Bed - Queen East - West
         Niche - Bedside - Both Sides
         Bunks - 2 or 3 x with Windows ( Length: Top Bunk – 1.9m,, Middle Bunk 1.9m)
           Mattress - Innerspring with Pillow-Top
           L - Shape Lounge - with Drop Down Table with TIC Cushion
           Storage - Drawers
           Windows - Double-Glazed
           Door - Triple Lock with Separate Security Screen
           Drawers - On Rollers
           Floor Vinyl - Durable Modern Design
           Hatch Roof - 700mm x 500mm
           Hatch Roof - 450mm x 400mm
           TV - Bracket
           Hinges - Piano
           Pantry - Half (Slide-Out)
           Frame – Meranti/ CNC`,
      },
        {
          title: 'SPLASHBACK, BENCHTOP, CUPBOARD DOORS AND UPHOLSTERY',
          content: `Bench Top - Premium Laminate 
          Bench Top Lid - Over Stove
          Splashback Kitchen - Full Height
          Cupboard Doors - Premium Laminate ( Scratch & UV Resistant ) 
          Cupboard Doors - Premium Laminate ( Scratch & UV Resistant ) `,
      },
        {
          title: 'ELECTRICAL - INTERNAL',
          content: `Projecta 30A charger + 30A MPPT
          Projecta Display w Bluetooth  
          Lighting - LED Down lights 
          TV - Co-Ax Point  
          TV - Aerial Point
          Speakers - 2 x Internal
          USB Ports - 1 x in Each Bunk (2), 2 x Bedside & 1 x Lounge 
          Reading Lights
          Sirocco Fan – Main bed    `,
      },
        {
            title: 'ELECTRICAL - EXTERNAL',
            content: ` 2 x LED Annexe Lights
            1 x LED Annexe Light over Tunnel Boot
            LED Tunnel Boot Light
            Blue LED Door Handle Light
            Blue LED Light Bar ( Front & Back)
            12-Pin Car Plug
            12V Weatherproof Cig Socket
            240V Weatherproof Outlet
            3 X 170W SOLAR PANELS
            3 x water Tank Level Probes
            Reverse Camera & Displayn
            An Antenna
            2 X 100AH LITHIUM BATTERIES
            Side Markers with Reflector  `,
         },
          {
            title: 'APPLIANCES',
            content: ` Air Conditioning - DOMETIC FRESH JET AIRCON
            Front Load Washing Machine
            Hot water – 28-litre Gas/Electric Heating
            Rangehood: 12V LED with Twin Fans
            Oven (3 x Gas | 1 x Electric Burner and Grill)
            Fridge and Freezer: 188L DOMETIC COMPRESSOR FRIDGE
            25L Microwave
            Stereo/Speaker System
            24” TV `,
          },
          {
            title: 'PLUMBING',
            content: `  ABS Shower
            Thetford Toilet
            Premium Black Kitchen Tap
            Black Round Basin
            Single Bowl Black Sink
            3-Way Tap with Water Filter
            Gas Bayonet
            External Shower
            Tap on A-frame
            2 x 95-Litre Water Tanks
            110-Litre Grey Water Tank`,
          },
          {
            title: 'EXTERIOR',
            content: `15Ft Roll-Out Awning
            Storage Compartment Hatch (Rear, Off-Side)
            Foldable Picnic Table
            Tunnel Boot – Front ( Dual Access )
            2 x 9KG Gas Bottles
            Double Pull-Out Step
            Stone Mesh Guard
            Large Toolbox with Dual Slide Out
            Front Dual Bike Rack`,
          },
          {
            title: 'PROTECTION',
            content: `Checker Plate Front 900mm (Black)
            Checker Plate Sides 900mm (Black)
            Checker Plate Sides 900mm (Black)
            Aluminium Composite Cladding
            Mudflaps
            12” Electric Brake System`,
          },
          {
            title: 'CHASSIS',
            content: `Dual Axle
            Hitch: D035
            A-Frame: 6″
            Chassis: 6″ Dura-Gal
            2” Raiser
            Wheels: 16″ Alloy
            Heavy-Duty Off-Road Tires
            1 x Spare Wheel (Mounted On Rear Bumper)
            2 x  Jerry Can Holders (Rear Bumper)
            Jack: CNR Supports (Drop-Down)
            A-Frame Jockey Wheel
            Storage Mesh Plate`,
          },
          {
            title: 'OVERALL',
            content: `Approx Ball Weight: 160 kg
            Approx Tare Weight: 2750 kg
            ATM: 3500 kg`,
          },
          {
            title: 'SUSPENSION',
            content: `FULL OFF-ROAD - INDEPENDENT – 3.5T`,
          },
      ];
      
      return (
        <div className="specs_container">
          <div className="accordion">
            <dl>
              {data.map((item, index) => (
                <React.Fragment key={index}>
                  <dt>
                    <button
                      className={`accordionTitle ${
                        activeIndex === index ? 'accordionTitleActive' : ''
                      }`}
                      onClick={() => toggleAccordion(index)}
                    >
                      {item.title}
                    </button>
                  </dt>
                  <dd
                    className={`accordionItem ${
                      activeIndex === index
                        ? 'animateIn'
                        : 'accordionItemCollapsed animateOut'
                    }`}
                  >
                    <ul className="list">
                      {item.content.split('\n').map((listItem, subIndex) => (
                        <li key={subIndex}>{listItem.trim()}</li>
                      ))}
                    </ul>
                  </dd>
                </React.Fragment>
              ))}
            </dl>
          </div>
        </div>
      );
    };
    
    export default React.memo(Specs19);