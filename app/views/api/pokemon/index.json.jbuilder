@pokemon.each do |poke|
  json.set! poke.id do
    json.extract! poke, :id, :name, :poke_type, :attack, :defense, :moves
    json.image_url asset_path("pokemon_snaps/#{poke.image_url}")
  end
end