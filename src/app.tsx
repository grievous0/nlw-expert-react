import logo from './assets/logo-nlw-expert.svg'

export function App() {
  return (
    <div className='mx-auto max-w-6xl my-12 space-y-6'>
      <img src={logo} alt='NLW Expert'/>
      
      <form className='w-full'>
        <input 
          type="text" 
          placeholder='Busque em suas notas...'
          className='w-full bg-transparent text-3xl font-semibold tracking-tight outline-none placeholder:text-slate-500'
        />
      </form>

      <div className='h-px bg-slate-700' />

      <div className='grid grid-cols-3 gap-6 auto-rows-[250px]'>
        <div className='rounded-md bg-slate-700 p-5 space-y-3'>
          <span className='font-medium text-sm text-slate-200'>
            Adicionar nota
          </span>
          <p className='text-sm leading-6 text-slate-400'>
            Grave uma nota em áudio que será convertida para texto automaticamente.
          </p>
        </div>

        <div className='rounded-md bg-slate-800 p-5 space-y-3 overflow-hidden relative'>
          <span className='font-medium text-sm text-slate-300'>
            Há 2 dias
          </span>
          <p className='text-sm leading-6 text-slate-400'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam labore fugiat, accusantium magni a natus tempora possimus velit nihil doloribus pariatur expedita quaerat reiciendis? Velit ullam aliquid repudiandae adipisci nesciunt? Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam labore fugiat, accusantium magni a natus tempora possimus velit nihil doloribus pariatur expedita quaerat reiciendis? Velit ullam aliquid repudiandae adipisci nesciunt?
          </p>

          <div className='absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/60 to-black/0 pointer-events-none'/>
        </div>

        <div className='rounded-md bg-slate-800 p-5 space-y-3 overflow-hidden relative'>
          <span className='font-medium text-sm text-slate-300'>
            Há 4 dias
          </span>
          <p className='text-sm leading-6 text-slate-400'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus ab quas debitis quasi a, iste ipsam labore repellat aut neque quae natus? Eligendi est beatae sint earum sunt minima quo!
          </p>

          <div className='absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/60 to-black/0 pointer-events-none'/>
        </div>

        <div className='rounded-md bg-slate-800 p-5 space-y-3 overflow-hidden relative'>
          <span className='font-medium text-sm text-slate-300'>
            Há 5 dias
          </span>
          <p className='text-sm leading-6 text-slate-400'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam qui consectetur voluptatibus dicta, dolorem itaque eos earum laborum inventore tenetur alias, iure suscipit aut necessitatibus adipisci debitis praesentium corrupti velit.
          </p>

          <div className='absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/60 to-black/0 pointer-events-none'/>
        </div>

      </div>
    </div>
  )
}
