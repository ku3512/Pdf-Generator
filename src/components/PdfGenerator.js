import React from 'react';
import { PDFViewer, Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';

const PdfGenerator = ({ name, course }) => {

  const styles = StyleSheet.create({
    page: {
      flexDirection: 'row',
      backgroundColor: '#E4E4E4',
    },
    section: {
      margin: 10,
      padding: 10,
      flexGrow: 1,
    },
    text: {
      fontSize: 12,
      marginBottom: 10,
    },
  });

 
  const pdfContent = (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <Text style={styles.text}>Name: {name}</Text>
          <Text style={styles.text}>Course: {course}</Text>
          <Text style={styles.text}>Date of Offer: {new Date().toLocaleDateString()}</Text>
        </View>
      </Page>
    </Document>
  );

  return (
    <div style={{ width: '100%', height: '100vh' }}>
      <PDFViewer style={{ width: '100%', height: '100%' }}>
        {pdfContent}
      </PDFViewer>
    </div>
  );
};

export default PdfGenerator;
