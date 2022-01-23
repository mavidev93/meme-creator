
function ImageCarousel(){
    return     <div className="flex">
    {memesList.map((m) => (
      <img
        src={m.image}
        alt="meme"
        key={m.image}
        className="max-w-xs	cursor-pointer"
        onClick={(e) => handleMemeListClick(m)}
      />
    ))}
  </div>
}

export im