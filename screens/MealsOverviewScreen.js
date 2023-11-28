import { StyleSheet, FlatList, View } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { MEALS,CATEGORIES } from '../data/dummy-data'
import MealItem from '../components/MealItem'

const MealsOverviewScreen = ({route,navigation}) => {
const catId = route.params.categoryId

const displayedMeals = MEALS.filter((mealitem)=>{
  return mealitem.categoryIds.indexOf(catId)>=0
})

useLayoutEffect(() => {
  const category = CATEGORIES.find((cat) => cat.id === catId);

  navigation.setOptions({
    title: category ? category.title : 'Meals', // Check if category is found
  });
}, [catId, navigation]);



function renderMealItem(itemData){
const mealItemProps = {
  id:itemData.item.id,
  title:itemData.item.title,
  imageUrl:itemData.item.imageUrl,
  affordability:itemData.item.affordability,
  complexity:itemData.item.complexity,
  duration:itemData.item.duration
}

return <MealItem {...mealItemProps}/>
}

  return (
    <View style={styles.container}>
      <FlatList data={displayedMeals} keyExtractor={(item)=>item.id} renderItem={renderMealItem}/>
    </View>
  )
}

export default MealsOverviewScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
        padding:16
    }
})