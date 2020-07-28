import React from 'react';
import { View, Text, StyleSheet ,Button} from 'react-native';

const CategoryMealScreen = props => {
  return (
    <View style={styles.screen}>
      <Text>The Category Meal Screen 12!</Text>
      <Button title="Go to Meals detail"
      onPress={()=>{
          props.navigation.replace('MealDetail');
      }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default CategoryMealScreen;
