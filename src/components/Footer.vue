<template>
  <footer className="bg-gray-950 py-10 mt-12 border-t border-gray-800">
    <div className="container mx-auto px-6 text-center">
      <h4 className="text-2xl font-bold mb-4 text-white">Entre em Contato</h4>
      <p className="text-gray-400 mb-6">Fale comigo para encomendas ou colaborações!</p>
      <div className="flex justify-center flex-wrap space-x-6 text-gray-400">
        {/* E-mail */}
        <a
          href="mailto:seu.email@exemplo.com"
          className="hover:text-purple-400 transition duration-300 flex items-center mb-2"
        >
          <Mail className="w-5 h-5 mr-2" /> seu.email@exemplo.com
        </a>
        {/* Redes Sociais Placeholder */}
        <a
          href="#"
          className="hover:text-purple-400 transition duration-300 flex items-center mb-2"
        >
          <Instagram className="w-5 h-5 mr-2" /> Instagram
        </a>
        <a
          href="#"
          className="hover:text-purple-400 transition duration-300 flex items-center mb-2"
        >
          <Dribbble className="w-5 h-5 mr-2" /> Dribbble
        </a>
        <a
          href="#"
          className="hover:text-purple-400 transition duration-300 flex items-center mb-2"
        >
          <Heart className="w-5 h-5 mr-2" /> ArtStation
        </a>
      </div>
      <p className="mt-8 text-sm text-gray-600">
        © 2025. Desenvolvido com Vue/React e Tailwind CSS.
      </p>
    </div>
  </footer>
</template>
