function Spinner() {
  return (
    <div className='m-0 absolute top-0 left-0 w-full h-full z-[1000] backdrop-blur-sm bg-white/10 flex items-center justify-center '>
      <style>
        {`
        /* HTML: <div class="loader"></div> */
        .spinner-loader {
          width: 60px;
          aspect-ratio: 1;
          --c:no-repeat linear-gradient(#046D8B 0 0);
          background: var(--c),var(--c),var(--c),var(--c);
          animation: 
            l9-1 1.5s infinite,
            l9-2 1.5s infinite;
        }
        @keyframes l9-1 {
          0%   {background-size: 0    4px,4px 0   }
          25%  {background-size: 40px 4px,4px 0   }
          45%,
          55%  {background-size: 40px 4px,4px 42px}
          75%  {background-size: 0    4px,4px 42px}
          100% {background-size: 0    4px,4px 0   }
        }
        @keyframes l9-2 {
          0%,49.9% {background-position: 0  38px               ,18px 18px,100% 18px,right 18px bottom 18px}
          50%,100% {background-position: right 20px bottom 18px,18px 100%,20px 18px,right 18px top 0      }
        }
    `}
      </style>
      <div className='spinner-loader'></div>
    </div>
  );
}

export default Spinner;
