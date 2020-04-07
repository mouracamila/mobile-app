import React from "react";
import { View } from "react-native";

import styles from "./styles";

import {
  MenuContext,
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from "react-native-popup-menu";

export default function Navigation() {
  return (
    <View>
      <MenuContext style={styles.containerMenu}>
        <View>
          <Menu>
            <MenuTrigger text="Open menu" />
            <MenuOptions>
              <MenuOption onSelect={() => alert(`Denucia`)}>
                <Text style={styles.menuItem}>Denunciar Vendedor</Text>
              </MenuOption>
              <MenuOption onSelect={() => alert(`More`)}>
                <Text style={styles.menuItem}>
                  Mais Informações sobre o vendedor
                </Text>
              </MenuOption>
              <MenuOption onSelect={() => alert(`Favorite`)}>
                <Text style={styles.menuItem}>Marcar como Favorito</Text>
              </MenuOption>
            </MenuOptions>
          </Menu>
        </View>
      </MenuContext>
    </View>
  );
}
