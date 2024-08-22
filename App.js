import { StyleSheet, View } from 'react-native';
import MapboxGL, { Terrain } from '@rnmapbox/maps';

MapboxGL.setAccessToken("pk.eyJ1IjoiZ2lqc3RlYnJpaiIsImEiOiJjbTA0d3Q5eW0wNTRxMmtzOXBiZnVsYW5rIn0.QpqG3L3I10Llk4DG4o2bmQ")

export default function App() {
  return (
    <View style={styles.container}>
      <MapboxGL.MapView style={{ flex: 1 }}>
        <MapboxGL.RasterDemSource
          id="mapbox-dem"
          url="mapbox://mapbox.mapbox-terrain-dem-v1"
        >
          <Terrain style={{exaggeration: 1}}/>
        </MapboxGL.RasterDemSource>
        <MapboxGL.Camera
          zoomLevel={11}
          centerCoordinate={[7.658596832896972, 45.976536103548355]}
          pitch={60}
        />
      </MapboxGL.MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
