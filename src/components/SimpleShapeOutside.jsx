import React, {useEffect} from 'react'
import './ssoStyles.css'

export default function SimpleShapeOutside() {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = "./shapes-polyfill.js";
        script.async = true;
        document.body.appendChild(script);
        return () => {
            document.body.removeChild(script);
        }
    }, []);
  return (
    <>
        <div className='main'>
            <h1>shape-outside values</h1>

            <h2>shape-outside: inset</h2>
            <div class='shape inset'>
                <svg xmlns='http://www.w3.org/2000/svg' width='200px' height='200px'>
                    <rect x='10%' y='10%' rx='10%' ry='10%' width='80%' height='80%' fill='rgba(51, 51, 51, 0.8)'/>
                </svg>
            </div>
            <p>Pelicans are a genus of large water birds comprising the family Pelecanidae. They are characterised by a long beak and large throat pouch used for catching prey and draining water from the scooped up contents before swallowing. They have predominantly pale plumage, the exceptions being the Brown and Peruvian Pelicans. The bills, pouches and bare facial skin of all species become brightly coloured before the breeding season. The eight living pelican species have a patchy global distribution, ranging latitudinally from the tropics to the temperate zone, though they are absent from interior South America as well as from polar regions and the open ocean. Fossil evidence of pelicans dates back at least 30 million years, to the remains of a beak very similar to that of modern species recovered from Oligocene strata in France. Pelicans are a genus of large water birds comprising the family Pelecanidae. They are characterised by a long beak and large throat pouch used for catching prey and draining water from the scooped up contents before swallowing. They have predominantly pale plumage, the exceptions being the Brown and Peruvian Pelicans. The bills, pouches and bare facial skin of all species become brightly coloured before the breeding season. The eight living pelican species have a patchy global distribution, ranging latitudinally from the tropics to the temperate zone, though they are absent from interior South America as well as from polar regions and the open ocean. Fossil evidence of pelicans dates back at least 30 million years, to the remains of a beak very similar to that of modern species recovered from Oligocene strata in France.</p>

            <h2>shape-outside: circle</h2>
            <div class='shape circle right'>
                <svg xmlns='http://www.w3.org/2000/svg' width='200px' height='200px'>
                    <circle cx='50%' cy='50%' r='50%' fill='rgba(51, 51, 51, 0.8)'/>
                </svg>
            </div>
            <p>Long thought to be related to frigatebirds, cormorants, tropicbirds, gannets and boobies, pelicans are now known instead to be most closely related to the Shoebill and Hamerkop, and are placed in the order Pelecaniformes. Ibises, spoonbills and herons are more distant relatives, and have been classified in the same order. Pelicans frequent inland and coastal waters where they feed principally on fish, catching them at or near the water surface. Gregarious birds, they often hunt cooperatively and breed colonially. Four white-plumaged species tend to nest on the ground, and four brown or grey-plumaged species nest mainly in trees. Pelicans are a genus of large water birds comprising the family Pelecanidae. They are characterised by a long beak and large throat pouch used for catching prey and draining water from the scooped up contents before swallowing. They have predominantly pale plumage, the exceptions being the Brown and Peruvian Pelicans. The bills, pouches and bare facial skin of all species become brightly coloured before the breeding season. The eight living pelican species have a patchy global distribution, ranging latitudinally from the tropics to the temperate zone, though they are absent from interior South America as well as from polar regions and the open ocean. Fossil evidence of pelicans dates back at least 30 million years, to the remains of a beak very similar to that of modern species recovered from Oligocene strata in France.</p>

            <h2>shape-outside: ellipse</h2>
            <div class='shape ellipse'>
                <svg xmlns='http://www.w3.org/2000/svg' width='200px' height='200px'>
                    <ellipse cx='50%' cy='50%' rx='25%' ry='50%' fill='rgba(51, 51, 51, 0.8)'/>
                </svg>
            </div>
            <p>The relationship between pelicans and people has often been contentious. The birds have been persecuted because of their perceived competition with commercial and recreational fishers. They have suffered from habitat destruction, disturbance and environmental pollution, and three species are of conservation concern. They also have a long history of cultural significance in mythology, and in Christian and heraldic iconography. Pelicans are a genus of large water birds comprising the family Pelecanidae. They are characterised by a long beak and large throat pouch used for catching prey and draining water from the scooped up contents before swallowing. They have predominantly pale plumage, the exceptions being the Brown and Peruvian Pelicans. The bills, pouches and bare facial skin of all species become brightly coloured before the breeding season. The eight living pelican species have a patchy global distribution, ranging latitudinally from the tropics to the temperate zone, though they are absent from interior South America as well as from polar regions and the open ocean. Fossil evidence of pelicans dates back at least 30 million years, to the remains of a beak very similar to that of modern species recovered from Oligocene strata in France.</p>

            <h2>shape-outside: polygon</h2>
            <div class='shape polygon right'>
                <svg xmlns='http://www.w3.org/2000/svg' width='200px' height='200px'>
                    <polygon points='100,0 200,100 100,200 0,100' fill='rgba(51, 51, 51, 0.8)'/>
                </svg>
            </div>
            <p>Pelicans are a genus of large water birds comprising the family Pelecanidae. They are characterised by a long beak and large throat pouch used for catching prey and draining water from the scooped up contents before swallowing. They have predominantly pale plumage, the exceptions being the Brown and Peruvian Pelicans. The bills, pouches and bare facial skin of all species become brightly coloured before the breeding season. The eight living pelican species have a patchy global distribution, ranging latitudinally from the tropics to the temperate zone, though they are absent from interior South America as well as from polar regions and the open ocean. Fossil evidence of pelicans dates back at least 30 million years, to the remains of a beak very similar to that of modern species recovered from Oligocene strata in France. Pelicans are a genus of large water birds comprising the family Pelecanidae. They are characterised by a long beak and large throat pouch used for catching prey and draining water from the scooped up contents before swallowing. They have predominantly pale plumage, the exceptions being the Brown and Peruvian Pelicans. The bills, pouches and bare facial skin of all species become brightly coloured before the breeding season. The eight living pelican species have a patchy global distribution, ranging latitudinally from the tropics to the temperate zone, though they are absent from interior South America as well as from polar regions and the open ocean. Fossil evidence of pelicans dates back at least 30 million years, to the remains of a beak very similar to that of modern species recovered from Oligocene strata in France.</p>

            <h2>shape-outside: url</h2>
            <div class='shape url'>
                <svg xmlns="http://www.w3.org/2000/svg" width="200px" height="200px" viewBox="0 0 100 100">
                    <circle cx="25" cy="25" r="25" fill="rgba(51, 51, 51, 0.8)"/>
                    <circle cx="75" cy="75" r="25" fill="rgba(51, 51, 51, 0.8)"/>
                </svg>
            </div>
            <p>Long thought to be related to frigatebirds, cormorants, tropicbirds, gannets and boobies, pelicans are now known instead to be most closely related to the Shoebill and Hamerkop, and are placed in the order Pelecaniformes. Ibises, spoonbills and herons are more distant relatives, and have been classified in the same order. Pelicans frequent inland and coastal waters where they feed principally on fish, catching them at or near the water surface. Gregarious birds, they often hunt cooperatively and breed colonially. Four white-plumaged species tend to nest on the ground, and four brown or grey-plumaged species nest mainly in trees. Pelicans are a genus of large water birds comprising the family Pelecanidae. They are characterised by a long beak and large throat pouch used for catching prey and draining water from the scooped up contents before swallowing. They have predominantly pale plumage, the exceptions being the Brown and Peruvian Pelicans. The bills, pouches and bare facial skin of all species become brightly coloured before the breeding season. The eight living pelican species have a patchy global distribution, ranging latitudinally from the tropics to the temperate zone, though they are absent from interior South America as well as from polar regions and the open ocean. Fossil evidence of pelicans dates back at least 30 million years, to the remains of a beak very similar to that of modern species recovered from Oligocene strata in France.</p>
        </div>
    </>
  )
}


    {/* <script src='./shapes-polyfill.js'></script> */}
