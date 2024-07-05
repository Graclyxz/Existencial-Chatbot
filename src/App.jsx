import HomePage from './components/HomePage';
import theme from './components/chatbot/ChatBotTheme';
import steps from './components/chatbot/ChatBotSteps';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ChatBot from "react-simple-chatbot";
import { ThemeProvider } from 'styled-components';

function App() {
  return (
    
    <Router>
    <ThemeProvider theme={theme}>
      <ChatBot steps={steps} />;
    </ThemeProvider>
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </div>
  </Router>
  );
}

export default App;
