<<<<<<< HEAD
import { useState, useEffect } from 'react';
import './styles/main.css';
import logoImg from './assets/logo-nlw.png'
import { GammeBanner } from './components/GameBanner';
import { CreateAdBanner } from './components/CreateAdBanner';

import * as Dialog from '@radix-ui/react-dialog';
import { GameController } from 'phosphor-react';
import { Input } from './components/Form/Input';

interface Game {
  id: string;
  title: string;
  bannerUrl: string;
  _count: {
    ads: number;
  }
}

function App() {
  const [games, setGames] = useState<Game[]>([])

  useEffect(() => {
    fetch('http://localhost:3333/games')
      .then(response => response.json())
      .then(data => {
        setGames(data)
    })
  }, [])

=======
import './styles/main.css';
import logoImg from './assets/logo-nlw.png'
import { MagnifyingGlassPlus } from 'phosphor-react'


function App() {
>>>>>>> 31c236bcd1b645ac8a301572e33cb426c3030d9a
  return (
    <div className='max-w-[1344px] mx-auto flex flex-col items-center my-20'>

      <img src={logoImg} alt="Logo do NLW eSports" />

      <h1 className='text-6xl text-white font-black mt-20'>Seu <span className='bg-nlw-gradient bg-clip-text text-transparent'> duo </span> está aqui.</h1>

      <div className='grid grid-cols-6 gap-6 mt-16'>
<<<<<<< HEAD
        {games.map(game => {
          return (
            <GammeBanner 
              key={game.id}
              bannerUrl={game.bannerUrl} 
              tittle={game.title} 
              adsCount={game._count.ads} 
            />
          )
        })}
      </div>

      <Dialog.Root>
        <CreateAdBanner />
        
        <Dialog.Portal>
          <Dialog.Overlay className='bg-black/60 inset-0 fixed' />

          <Dialog.Content className='fixed bg-[#2A2634] py-8 px-10  text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg w-[480px] shadow-xl'>
            <Dialog.Title className='text-3xl font-black'>Publique um anúncio</Dialog.Title>

            <form action="" className='mt-8 flex flex-col gap-4'>
              <div className='flex flex-col gap-2'>
                <label htmlFor="game" className='font-semibold'>Qual o game?</label>
                <Input id="name" placeholder="Selecione o game que deseja jogar" />
              </div>
              <div className='flex flex-col gap-2'>
                <label htmlFor="name">Seu nome (ou nickname)</label>
                <Input id='name' type="text" placeholder='Como se chama dentro do game?'/>
              </div>
              <div className='grid grid-cols-2 gap-6'>
                <div className='flex flex-col gap-2'>
                  <label htmlFor="yearsPlaying">Joga a quantos anos?</label>
                  <Input id='yearsPlaying' type="number" placeholder='Tudo bem ser ZERO'/>
                </div>
                <div className='flex flex-col gap-2'>
                  <label htmlFor="discord">Qual o seu Discord?</label>
                  <Input id='discord' type="text" placeholder='Usuario#0000'/>
                </div>
              </div>
              <div className='flex gap-6'>
                <div className='flex flex-col gap-2'>
                  <label htmlFor="weekDays">Quando costuma jogar?</label>
                  <div className='flex gap-1'>
                    <button className='w-10 h-10 rounded bg-zinc-900 gap-1' title='Segunda'>S</button>
                    <button className='w-10 h-10 rounded bg-zinc-900 gap-1' title='Terça'>T</button>
                    <button className='w-10 h-10 rounded bg-zinc-900 gap-1' title='Quarta'>Q</button>
                    <button className='w-10 h-10 rounded bg-zinc-900 gap-1' title='Quinta'>Q</button>
                    <button className='w-10 h-10 rounded bg-zinc-900 gap-1' title='Sexta'>S</button>
                  </div>
                </div>
                <div className='flex flex-col gap-2 flex-1'>
                  <label htmlFor="hourStart">Qual horário do dia</label>
                  <div className='grid grid-cols-2 gap-2'>
                    <Input id='hourStart' type="time" placeholder='De'/>
                    <Input id='hourEnd' type="time" placeholder='Até'/>
                  </div>
                </div>
              </div>

              <div className='mt-2 flex gap-2 text-sm'>
                <Input type="checkbox" />Costumo me conectar ao chat de voz
              </div>

              <footer className='mt-4 flex justify-end gap-4'>
                <Dialog.Close className='bg-zinc-500 px-5 h-12 rounded-md font-semibold hover:bg-zinc-600'>Cancelar</Dialog.Close>
                <button className='bg-violet-500 px-5 h-12 rounded-md font-semibold flex items-center gap-3 hover:bg-violet-600' type='submit'>
                  <GameController size={24}/>
                  Encontrar Duo
                </button>
              </footer>
            </form>
          
          </Dialog.Content>
        </Dialog.Portal>

      </Dialog.Root>
=======
        <a href="" className='relative rounded-lg overflow-hidden'>
          <img src="/game-1.png" alt="cartaz do game league of legends" />

          <div className='w-full pt-16 pb-4 px-4 bg-game-gradiente absolute bottom-0 left-0 right-0'>
            <strong className='font-bold text-white block'>League of Legends</strong>
            <span className='text-sm text-zinc-300 block'>4 anúncios</span>
          </div>
        </a>
        <a href="" className='relative rounded-lg overflow-hidden'>
          <img src="/game-2.png" alt="cartaz do game dota 2" />

          <div className='w-full pt-16 pb-4 px-4 bg-game-gradiente absolute bottom-0 left-0 right-0'>
            <strong className='font-bold text-white block'>Dota 2</strong>
            <span className='text-sm text-zinc-300 block'>1 anúncios</span>
          </div>
        </a>
        <a href="" className='relative rounded-lg overflow-hidden'>
          <img src="/game-3.png" alt="cartaz do game couter strike" />

          <div className='w-full pt-16 pb-4 px-4 bg-game-gradiente absolute bottom-0 left-0 right-0'>
            <strong className='font-bold text-white block'>Counter Strike</strong>
            <span className='text-sm text-zinc-300 block'>8 anúncios</span>
          </div>
        </a>
        <a href="" className='relative rounded-lg overflow-hidden'>
          <img src="/game-4.png" alt="cartaz do game world of warcraft" />

          <div className='w-full pt-16 pb-4 px-4 bg-game-gradiente absolute bottom-0 left-0 right-0'>
            <strong className='font-bold text-white block'>World of Warcraft</strong>
            <span className='text-sm text-zinc-300 block'>3 anúncios</span>
          </div>
        </a>
        <a href="" className='relative rounded-lg overflow-hidden'>
          <img src="/game-5.png" alt="cartaz do game apex legends" />

          <div className='w-full pt-16 pb-4 px-4 bg-game-gradiente absolute bottom-0 left-0 right-0'>
            <strong className='font-bold text-white block'>Apex Legends</strong>
            <span className='text-sm text-zinc-300 block'>2 anúncios</span>
          </div>
        </a>
        <a href="" className='relative rounded-lg overflow-hidden'>
          <img src="/game-6.png" alt="cartaz do game fortnite" />

          <div className='w-full pt-16 pb-4 px-4 bg-game-gradiente absolute bottom-0 left-0 right-0'>
            <strong className='font-bold text-white block'>Fortnite</strong>
            <span className='text-sm text-zinc-300 block'>4 anúncios</span>
          </div>
        </a>

      </div>

      <div className='pt-1 bg-nlw-gradient self-stretch rounded-lg overflow-hidden mt-8'>
        <div className='bg-[#2A2634] px-8 py-6 flex justify-between items-center'>
          <div>
            <strong className='text-2xl text-white font-black block mb'>Não encontrou o seu duo?</strong>
            <span className='text-zinc-400 block'>Publique um anúncio para encontrar novos players!</span>
          </div>

          <button className='py-3 px-4 bg-violet-500 text-white rounded hover:bg-violet-600 flex items-center gap-3'>
            <MagnifyingGlassPlus size={24} />
            Publicar anúncio
          </button>
        </div>

      </div>
>>>>>>> 31c236bcd1b645ac8a301572e33cb426c3030d9a

    </div>
  )
}

export default App
