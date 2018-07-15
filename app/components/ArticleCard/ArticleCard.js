import React from 'react'
import {
  Text,
  TouchableOpacity,
  Image,
  View
} from 'react-native'
import styles from './ArticleStyle'
import PropTypes from 'prop-types'

const ArticleCard = (props) => {
  return (
    <TouchableOpacity
      style={[styles.container, styles.text]}
      onPress={props.navigateToArticle}>
      <Image style={styles.image} source={{ uri: 'http://placehold.it/100x80' }} />
      <View style={styles.content}>
        <Text style={styles.title}>{props.title}</Text>
        <Text style={styles.description} numberOfLines={2} ellipsizeMode={'tail'}>{props.description}</Text>
      </View>
    </TouchableOpacity>
  )
}

ArticleCard.propTypes = {
  navigateToArticle: PropTypes.func,
  title: PropTypes.string,
  description: PropTypes.string
}

export default ArticleCard
