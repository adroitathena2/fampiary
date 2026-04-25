import React, { useState, useRef, useEffect } from 'react';
import Navigation from './components/Navigation';
import HiveScreen from './screens/HiveScreen';
import SearchScreen from './screens/SearchScreen';
import SwarmScreen from './screens/SwarmScreen';
import ProfileScreen from './screens/ProfileScreen';
import LoginScreen from './screens/LoginScreen';
import SignUpScreen from './screens/Signupscreen';
import TreeScreen from './screens/TreeScreen';
import { useStore } from './store/useStore';

function App() {
  const currentUser = useStore((state) => state.currentUser);
  const [activeTab, setActiveTab] = useState('hive');
  const [authMode, setAuthMode] = useState<'login' | 'signup'>('signup');
  const mainContentRef = useRef<HTMLDivElement>(null);

  // Reset scroll position when switching tabs
  useEffect(() => {
    if (mainContentRef.current) {
      mainContentRef.current.scrollTop = 0;
    }
  }, [activeTab]);

  const renderScreen = () => {
    switch (activeTab) {
      case 'hive':
        return <HiveScreen />;
      case 'search':
        return <SearchScreen />;
      case 'swarm':
        return <SwarmScreen />;
      case 'profile':
        return <ProfileScreen />;
      case 'tree':
        return <TreeScreen />;
      default:
        return <HiveScreen />;
    }
  };

  // Not logged in — show login or signup based on authMode
  if (!currentUser) {
    if (authMode === 'signup') {
      return (
        <SignUpScreen
          onSwitchToLogin={() => setAuthMode('login')}
        />
      );
    }
    return (
      <LoginScreen
        onSwitchToSignUp={() => setAuthMode('signup')}
      />
    );
  }

  return (
    <div className="app-container">
      <Navigation activeTab={activeTab} onTabChange={setActiveTab} />
      <main key={activeTab} className="main-content" ref={mainContentRef}>
        {renderScreen()}
      </main>
    </div>
  );
}

export default App;