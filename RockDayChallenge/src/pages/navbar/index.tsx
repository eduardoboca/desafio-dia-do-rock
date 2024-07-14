export function Navbar() {
  return (
    <nav className="float-left pt-9  w-16 h-screen dark:bg-[#15141B]">
      <a className="flex mx-auto mb-4 w-10 h-10 rounded-full cursor-pointer bg-white">
        <img className="flex mx-auto mb-4 w-10 h-10 rounded-full cursor-pointer" src="../../../public/avatar.png" alt="image" />
        <div className="absolute mt-7 ml-7 bg-green-600 w-4 h-4 flex justify-center items-center rounded-full">
          <span className="text-slate-50 text-xs font-black">✓</span>
        </div>
      </a>
      <a className="flex justify-center items-center h-16 hover:bg-stone-100 dark:hover:bg-zinc-700" href="https:\\www.google.com.br">
        <img className="w-6 h-6"
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEDElEQVR4nO1aS4sUVxS+ig/UhRqj4AOFmXNqgiRufIw7F+51E3STRQJiXIoLJSZSm76nR0YXvnGvoOgsND/AnavR6XNmUNGFZHyAGEM0YGZMsOVUZ2D6VnXsdupWldP1QUHTXX3P/ereex7fKWNKlChRokSXIDT1uRXg7Rb5KAEPWZQxi/KHBXkXXfq58d11QvmJsNav/zGfGwaA1xFy1aI8IZR6J5f+xwJTBUfWmqKDvrq3glDOE/Bkp0TjxHnCopwLN459YYoICkb3WpCXMyUaIw7y0vbKHlMUhDtuzYtWtfUW/dMiX6oGvI+C0a0W7q68uHl4vl76Wb+LfkO5TMivW5IHOau2ciV7ct3tRRb51+QJ8v0K8vd6TyfjEcgPBPKgBfGbnYyXKsIdt+YlkbUobwn44ExWI9o1gRyKxoqPfyOXlbbIFxK23dNKn2xJy0bjCMiz+LnmM2nZaNtBJTz5u8f77qwxKUPH1LETSH9rsgo91vXGIE99kJ1C5NxQHjoP+EV1vSw3vkGOR9ZzluY2bgXbU/s6dqaBT3vPoCzyhGP0oMkIhPxz89bmv33uLKPpoht6svSYg5tqS2JODMR6MRaa+lw3N9Y4azKGRfnRSUF/81JwVIC3uxlUHklAuHp4sQV+07TKwejW1A1RVL41PdlLJidY4CvT51IFOZK6EQIeajIS8D6TE6oo+524fC11IxZlzPs2ahMqFDgVlaRvBPjVdCMnguEvTU4Y7KmtckvI1I2QU9SHG8cWmJxwCh4udPzJRFcRJuDJrtrSBPzKu9Oq4Mg2kxPcnICAubvCEvCQ98SDUC6nbqTtufBVpzY+7D32EfLrPFJLLSAI+C/vOUGYUDyo4GYyBoEccB78eN3U53gxZoHJIfwg6/KQgJ87MfioN4MVHFkbEwACOWQyAoEcc87um3DDyDKvRi3KOVfiySKvHujjb1yJxwIP5iLiWZBnvkU8i/zILfwHeoaX+rLZBO31JMm0OjHjR7G845B9bwPeabIEgZx1SauUqupiutu4eWW9JRptNtFuJqz0W1UX1aOamYh1yL8ktVr+iw7/aDPA5NNMkxtJk9JzrYKbalDtjqf3RnHWCT2FIh1qUw34TKuJaehQDaqR/9b69UxqaalXo+qp9TeUSL4ay6Cmndkol1eSRSCt0F6Ptj8+ujIdXuqNpxxU1NMqEunqelmu7Y9YcvIpRBs7Y9ANPYUjrdCYrB0BXZ3OyfK4Vmb/l0EVkvRUwRG90gByRKVUVRcj5QR4svHqEv+uxXv0ShPwYb233UKgsKR9+w2XtEX514J8Z2YrbElaypU2sxXUwpFVe3m36SrSyONmNoNc0sDPzWxHtZd3W5DHUSLTy7vynk+JEiVKlDCfgA/Zzfy6BH7JngAAAABJRU5ErkJggg==" />
      </a>
      <a className="flex justify-center items-center h-16 hover:bg-stone-100 dark:hover:bg-zinc-700" href="https:\\www.google.com.br">
        <img className="w-6 h-6"
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAABx0lEQVR4nO2ZvU7DMBSFLfEn8QbMtUuFxMSKxAYDgo2FB+A1uuS6XTp0rLox9hUY6ANkyL0wMfAjIYQqBG8AyG2RojRO7DgdKu4neWp67HN9spwIwTAM05cPW+2j2/WVmwQ0qQUSeyDxY7ZoqOXdcagZmOtqic+g8CVqJCe1ThskXmqFY1D4rRX9ZFcVM/0iXUmPwQfXraQJirpa0STv0LYFij5B4XUkk7P23v1mVV2xrGl7mUndjK+u8J54A8/LppK3uTlksFG1qOtvQOJb8SSxZ1627G8m87MJ09DXDBTo+hvIz3PcUXTV3om3bc+lNUZitNZtJocgsa8Vvhe8J7GPbiUDZiouz9n0/m6mbl0rrgK+Gy1LdwE2YIFvwBWOkAWOkCscIQscIVc4QhY4Qq5whCxwhFzhCFngCLnyLyIEOfVHWZ1YVVfUZcC0dR1JFyDpxtqNpurEwUG8UYeuCDWQbqLLCqqioreSrqTXcAM1daMVdCeRotNgA/lRMZvjeFrUVqwTdYmuiZb34R0MfIGkQXcX97P/c60TfXW9AUlPoVNxKXqhjmnnYT7rTE2YzzzzxjhEL2sm3USLVcOYqXXaDMOIleUXZPcP1eGvWKwAAAAASUVORK5CYII=" />
      </a>
      <a className="flex justify-center items-center h-16 hover:bg-stone-100 dark:hover:bg-zinc-700" href="https:\\www.google.com.br">
        <img className="w-6 h-6"
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAn0lEQVR4nO3ZsQ3CMBBG4dsFnFmIWMu++bBHcLIHFEGRSEnhnyPvk6736TW2bAYAfymndvdrW0tqS57qbNGU1BZP7blN7RaN74ffxqJxFhCjgBoF1CigRgE1CtjZC+T3ff54kNFTvn1PfN7n1VP7+RbIU51/Y4na/fK42WjHg1g0zgJiFFCjgBoF1CigRgG18AVK9A+OvL8nRPd5ALARXtXJnEkLuTXBAAAAAElFTkSuQmCC" />
      </a>
    </nav>
  );
};


