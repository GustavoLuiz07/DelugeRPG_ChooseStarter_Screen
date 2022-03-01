import React from 'react';
import {KeyboardAvoidingView, View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';

export default function PokemonDelugeRpg () {
  return (
    <KeyboardAvoidingView>
      <View style={styles.topcontainer}>

        <Image 
          style={styles.logo}
          source={{ uri: "https://i.dstatic.com/images/logos/main.png" }}
        />

        <TouchableOpacity style={styles.conta}>
          <Text style={styles.contatxt}>Gusta007</Text>
        </TouchableOpacity>

        <Image 
        style={styles.imagemconta}
        source={{ uri: "https://pm1.narvii.com/6233/df6f87d8ca0da39cab802ee6f3e02170abc3a186_hq.jpg" }}
        />

        <TouchableOpacity style={styles.maps}>
          <Text style={styles.mapstext}>Maps</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.profile}>
          <Text style={styles.profiletext}>Profile</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.pokemon}>
          <Text style={styles.pokemontext}>Pokémon</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.battle}>
          <Text style={styles.battletext}>Battle</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.trade}>
          <Text style={styles.tradetext}>Trade</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.misc}>
         <Text style={styles.misctext}>Misc</Text>
        </TouchableOpacity>
      </View>

        <View style={styles.professorarea}>
          <View style={styles.chooseyourstarter}>

          <Text style={styles.chooseyourstarterpkmn}>CHOOSE YOUR STARTER POKEMON!</Text>
          </View>

          <View style={styles.everytrainer}>
            <Text style={styles.everytrainer2}>Every trainer receives a starter pokemon when they start out on their pokemon journey! While most trainers get to choose from three pokemon, you can choose from over 15 pokemon here! Click on the starter you wish to choose, then click the button at the botton of screen to confirm.</Text>
          </View>

          <View style={styles.bulbasaur}>

          <TouchableOpacity>
          <Image 
            style={styles.bulbasaurimage}
            source={{ uri: "https://i.dstatic.com/images/pokemon/front/normal/bulbasaur.png" }}
          />
          </TouchableOpacity>

            <View style={styles.type01}>
              <Text style={styles.grass}>GRASS</Text>
            </View>

              <View style={styles.type02}>
                <Text style={styles.poison}>POISON</Text>

                <Text style={styles.moves}>MOVES</Text>
                <Text style={styles.movesstarted}>Vine Whip{`
Tackle
Razor Leaf`}</Text>
                <Text style={styles.move4}>Poison Powder</Text>

                <Text style={styles.pokename}>BULBASAUR</Text>

              </View>

          <View style={styles.charmander}>

          <TouchableOpacity>
          <Image 
            style={styles.charmanderimage}
            source={{ uri: "https://i.dstatic.com/images/pokemon/front/normal/charmander.png" }}
          />
          </TouchableOpacity>

            <View style={styles.type01fire}>
              <Text style={styles.fire}>FIRE</Text>
            </View>

              <Text style={styles.movesx}>MOVES</Text>
              <Text style={styles.movesstartedy}>Scratch{`
Ember
Slash`}</Text>
                <Text style={styles.move4z}>Dragon Rage</Text>

                <Text style={styles.pokenamechar}>CHARMANDER</Text>

              </View>

          </View>

          <View style={styles.squirtle}>

          <TouchableOpacity>
          <Image 
            style={styles.squirtleimage}
            source={{ uri: "https://i.dstatic.com/images/pokemon/front/normal/squirtle.png" }}
          />
          </TouchableOpacity>

            <View style={styles.type01water}>
              <Text style={styles.water}>WATER</Text>
            </View>

              <Text style={styles.movessq}>MOVES</Text>
              <Text style={styles.movesstartedysq}>Tackle{`
Bite
Bubble`}</Text>
                <Text style={styles.move4sq}>Water Gun</Text>

                <Text style={styles.pokenamesquir}>SQUIRTLE</Text>

              </View>

        </View>
  </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  topcontainer: {
    width: 328,
    height: 127,
    borderRadius: 1,
    elevation: 3,
    backgroundColor: "black",
    shadowOffset: { width: 1, height: 1 },
    shadowColor: "#333",
    shadowOpacity: 0.9,
    shadowRadius: 10,
    marginHorizontal: 4,
    marginVertical: 6,
    marginLeft: 2,
    marginTop: 2
  },
  logo: {
    width: 150,
    height: 40,
    marginTop: 2,
    marginLeft: 3
  },
  conta: {
    width: 102,
    height: 40,
    backgroundColor: "#363636",
    borderRadius: 1,
    marginLeft: 210,
    marginTop: -40
  },
  contatxt: {
    fontSize: 14,
    marginLeft: 36,
    marginTop: 10,
    color: "white",
    fontWeight: "bold"
  },
  imagemconta: {
    width: 30,
    height: 30,
    borderRadius: 170,
    marginLeft: 213,
    marginTop: -35
  },
  maps: {
    width: 50,
    height: 30,
    backgroundColor: "#D3D3D3",
    borderRadius: 3,
    marginLeft: 5,
    marginTop: 35
  },
  mapstext: {
    fontSize: 12,
    marginLeft: 10,
    marginTop: 5
  },
  profile: {
    width: 50,
    height: 30,
    backgroundColor: "#D3D3D3",
    borderRadius: 3,
    marginLeft: 60,
    marginTop: -30
  },
  profiletext: {
    fontSize: 12,
    marginLeft: 8,
    marginTop: 5
  },
  pokemon: {
    width: 51,
    height: 30,
    backgroundColor: "#D3D3D3",
    borderRadius: 3,
    marginLeft: 115,
    marginTop: -30
  },
  pokemontext: {
    fontSize: 12,
    marginLeft: 1,
    marginTop: 5
  },
  battle: {
    width: 50,
    height: 30,
    backgroundColor: "#D3D3D3",
    borderRadius: 3,
    marginLeft: 171,
    marginTop: -30
  },
  battletext: {
    fontSize: 12,
    marginLeft: 10,
    marginTop: 5
  },
  trade: {
    width: 50,
    height: 30,
    backgroundColor: "#D3D3D3",
    borderRadius: 3,
    marginLeft: 226,
    marginTop: -30
  },
  tradetext: {
    fontSize: 12,
    marginLeft: 10,
    marginTop: 5
  },
  misc: {
    width: 43,
    height: 30,
    backgroundColor: "#D3D3D3",
    borderRadius: 3,
    marginLeft: 280,
    marginTop: -30
  },
  misctext: {
    fontSize: 12,
    marginLeft: 8,
    marginTop: 5
  },
  professorarea: {
    width: 328,
    height: 440,
    backgroundColor: "#87CEEB",
    marginTop: -6,
    marginLeft: 2
  },
  chooseyourstarter: {
    width: 193,
    height: 40,
    borderRadius: 125,
    elevation: 3,
    backgroundColor: "white",
    shadowOffset: { width: 1, height: 1 },
    shadowColor: "#333",
    shadowOpacity: 0.9,
    shadowRadius: 10,
    marginHorizontal: 4,
    marginVertical: 6,
    marginLeft: 60,
    marginTop: 10
  },
  chooseyourstarterpkmn: {
    fontSize: 11,
    fontWeight: "bold",
    marginLeft: 2,
    marginTop: 11
  },
  everytrainer: {
    width: 310,
    height: 100,
    borderRadius: 1,
    elevation: 3,
    backgroundColor: "blue",
    shadowOffset: { width: 1, height: 1 },
    shadowColor: "#333",
    shadowOpacity: 0.9,
    shadowRadius: 10,
    marginHorizontal: 4,
    marginVertical: 6,
    marginLeft: 2,
    marginTop: 10
  },
  everytrainer2: {
    fontSize: 12,
    fontWeight: "normal",
    marginLeft: 5,
    marginTop: 2,
    color: "white"
  },
  bulbasaur: {
    width: 140,
    height: 120,
    borderRadius: 7,
    elevation: 3,
    backgroundColor: "#00FF7F",
    shadowOffset: { width: 1, height: 1 },
    shadowColor: "#333",
    shadowOpacity: 0.9,
    shadowRadius: 10,
    marginHorizontal: 4,
    marginVertical: 6,
    marginLeft: 7,
    marginTop: 10
  },
  bulbasaurimage: {
    width: 100,
    height: 60,
    borderRadius: 170,
    marginLeft: -20,
    marginTop: -2
  },
  type01: {
    width: 40,
    height: 20,
    borderRadius: 7,
    elevation: 3,
    backgroundColor: "green",
    shadowOffset: { width: 1, height: 1 },
    shadowColor: "#333",
    shadowOpacity: 0.9,
    shadowRadius: 10,
    marginHorizontal: 4,
    marginVertical: 6,
    marginLeft: 7,
    marginTop: 34
  },
  type02: {
    width: 46,
    height: 20,
    borderRadius: 7,
    elevation: 3,
    backgroundColor: "purple",
    shadowOffset: { width: 1, height: 1 },
    shadowColor: "#333",
    shadowOpacity: 0.9,
    shadowRadius: 10,
    marginHorizontal: 4,
    marginVertical: 6,
    marginLeft: 50,
    marginTop: -26
  },
  grass: {
    fontSize: 10,
    fontWeight: "bold",
    marginLeft: 5,
    marginTop: 2,
    color: "white"
  },
  poison: {
    fontSize: 10,
    fontWeight: "bold",
    marginLeft: 4,
    marginTop: 2,
    color: "white"
  },
  moves: {
    width: 40,
    fontSize: 10,
    fontWeight: "bold",
    marginLeft: 35,
    marginTop: -90,
    color: "black"
  },
  movesstarted: {
    width: 57,
    fontSize: 10,
    fontWeight: "normal",
    marginLeft: 36,
    marginTop: 2,
    color: "black"
  },
  move4: {
    width: 65,
    fontSize: 10,
    fontWeight: "normal",
    marginLeft: 22,
    marginTop: -1,
    color: "black"
  },
  pokename: {
    width: 57,
    fontSize: 9,
    fontWeight: "bold",
    marginLeft: -45,
    marginTop: -15,
    color: "black"
  },
  charmander: {
    width: 140,
    height: 120,
    borderRadius: 7,
    elevation: 3,
    backgroundColor: "#FFA07A",
    shadowOffset: { width: 1, height: 1 },
    shadowColor: "#333",
    shadowOpacity: 0.9,
    shadowRadius: 10,
    marginHorizontal: 4,
    marginVertical: 6,
    marginLeft: 161,
    marginTop: -117
  },
  charmanderimage: {
    width: 100,
    height: 60,
    borderRadius: 170,
    marginLeft: -20,
    marginTop: -2
  },
  type01fire: {
    width: 40,
    height: 20,
    borderRadius: 7,
    elevation: 3,
    backgroundColor: "red",
    shadowOffset: { width: 1, height: 1 },
    shadowColor: "#333",
    shadowOpacity: 0.9,
    shadowRadius: 10,
    marginHorizontal: 4,
    marginVertical: 6,
    marginLeft: 7,
    marginTop: 34
  },
  fire: {
    fontSize: 10,
    fontWeight: "bold",
    marginLeft: 9,
    marginTop: 2,
    color: "white"
  },
  movesx: {
    width: 40,
    fontSize: 10,
    fontWeight: "bold",
    marginLeft: 85,
    marginTop: -100,
    color: "black"
  },
  movesstartedy: {
    width: 57,
    fontSize: 10,
    fontWeight: "normal",
    marginLeft: 87,
    marginTop: 2,
    color: "black"
  },
  move4z: {
    width: 65,
    fontSize: 10,
    fontWeight: "normal",
    marginLeft: 72,
    marginTop: -1,
    color: "black"
  },
  pokenamechar: {
    width: 65,
    fontSize: 9,
    fontWeight: "bold",
    marginLeft: 3,
    marginTop: -15,
    color: "black"
  },
  squirtle: {
    width: 140,
    height: 120,
    borderRadius: 7,
    elevation: 3,
    backgroundColor: "#87CEFA",
    shadowOffset: { width: 1, height: 1 },
    shadowColor: "#333",
    shadowOpacity: 0.9,
    shadowRadius: 10,
    marginHorizontal: 4,
    marginVertical: 6,
    marginLeft: 90,
    marginTop: 10
  },
  squirtleimage: {
    width: 100,
    height: 60,
    borderRadius: 170,
    marginLeft: -20,
    marginTop: -2
  },
  type01water: {
    width: 45,
    height: 20,
    borderRadius: 7,
    elevation: 3,
    backgroundColor: "blue",
    shadowOffset: { width: 1, height: 1 },
    shadowColor: "#333",
    shadowOpacity: 0.9,
    shadowRadius: 10,
    marginHorizontal: 4,
    marginVertical: 6,
    marginLeft: 7,
    marginTop: 34
  },
  water: {
    fontSize: 10,
    fontWeight: "bold",
    marginLeft: 5,
    marginTop: 2,
    color: "white"
  },
  movessq: {
    width: 40,
    fontSize: 10,
    fontWeight: "bold",
    marginLeft: 85,
    marginTop: -100,
    color: "black"
  },
  movesstartedysq: {
    width: 57,
    fontSize: 10,
    fontWeight: "normal",
    marginLeft: 87,
    marginTop: 2,
    color: "black"
  },
  move4sq: {
    width: 65,
    fontSize: 10,
    fontWeight: "normal",
    marginLeft: 79,
    marginTop: -1,
    color: "black"
  },
  pokenamesquir: {
    width: 65,
    fontSize: 9,
    fontWeight: "bold",
    marginLeft: 3,
    marginTop: -15,
    color: "black"
  }
})
