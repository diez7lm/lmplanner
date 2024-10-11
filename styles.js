import { StyleSheet, Dimensions, Platform } from 'react-native';

const { height, width } = Dimensions.get('window');
const aspectRatio = 9 / 16;

export default StyleSheet.create({
  instagramButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#C13584',
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
    marginBottom: 20,
  },
  instagramButtonText: {
    color: '#fff',
    marginLeft: 10,
    fontWeight: 'bold',
  },
  centeredText: {
    textAlign: 'center',
    fontSize: 16,
    marginTop: 25,
    marginBottom: 25,
    color: '#333',
  },
  descriptionText: {
    fontSize: 14,
    color: '#666',
    marginVertical: 10,
    lineHeight: 22,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily: 'Helvetica Neue',
  },
  videoContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 20,
    paddingHorizontal: 10,
    aspectRatio: aspectRatio,
    height: height * 0.45,
  },
  video: {
    width: '100%',
    height: '100%',
    borderRadius: 8,
    boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
  },
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
  },
  stickyHeader: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    backgroundColor: '#1C2233',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    paddingVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1000,
  },
  headerText: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  scrollContainer: {
    paddingTop: 10,
    paddingHorizontal: 15,
  },
  scrollView: {
    flex: 1,
    width: '100%',
    ...(Platform.OS === 'web' && {
      overflowY: 'scroll',
      WebkitOverflowScrolling: 'touch',
    }),
  },
  '@global': {
    '::-webkit-scrollbar': {
      width: '8px',
    },
    '::-webkit-scrollbar-thumb': {
      backgroundColor: '#ff6347',
      borderRadius: '10px',
    },
    '::-webkit-scrollbar-track': {
      backgroundColor: '#f9f9f9',
    },
  },
  featureList: {
    marginBottom: 20,
  },
  ctaSection: {
    marginTop: 20,
    marginBottom: 30,
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#ff6347',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
  },
  iframeContainer: {
    flex: 1,
    width: '100%',
    height: height * 0.45,
    aspectRatio: aspectRatio,
  },
  iframe: {
    width: '100%',
    height: '100%',
    border: 'none',
    borderRadius: 8,
    boxShadow: '0 4px 8px rgba(0,0,0,0.2)'
  },
  // Nouveaux styles pour le bouton d'installation PWA
  installButton: {
    backgroundColor: '#4CAF50',
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
    marginBottom: 20,
    alignSelf: 'center',
  },
  installButtonText: {
    color: '#FFFFFF',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 16,
  },
});