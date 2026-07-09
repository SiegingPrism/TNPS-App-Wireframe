import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, SafeAreaView } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import LoginScreen from './screens/LoginScreen';
import DashboardScreen from './screens/DashboardScreen';
import AdminDashboardScreen from './screens/AdminDashboardScreen';
import WebViewScreen from './screens/WebViewScreen';
import {
  AttendanceScreen,
  RoomBookingScreen,
  SickLeaveScreen,
  RequestPassScreen,
  PassHistoryScreen,
  NotificationsScreen,
} from './screens/PlaceholderScreens';

// Destinations matching AppDestinations enum in Kotlin
enum AppDestinations {
  DASHBOARD = 'DASHBOARD',
  PASSES = 'PASSES',
  HISTORY = 'HISTORY',
  ATTENDANCE = 'ATTENDANCE',
  ROOMS = 'ROOMS',
  NOTIFICATIONS = 'NOTIFICATIONS',
  SICK_LEAVE = 'SICK_LEAVE',
}

interface NavItem {
  destination: AppDestinations;
  label: string;
  icon: string;
  showInNavBar: boolean;
}

const navItems: NavItem[] = [
  { destination: AppDestinations.DASHBOARD, label: 'Dashboard', icon: 'view-dashboard', showInNavBar: true },
  { destination: AppDestinations.PASSES, label: 'Passes', icon: 'ticket-confirmation', showInNavBar: true },
  { destination: AppDestinations.HISTORY, label: 'History', icon: 'history', showInNavBar: true },
  { destination: AppDestinations.ATTENDANCE, label: 'Attendance', icon: 'calendar-check', showInNavBar: true },
  { destination: AppDestinations.ROOMS, label: 'Rooms', icon: 'door-open', showInNavBar: true },
  { destination: AppDestinations.NOTIFICATIONS, label: 'Notifications', icon: 'bell', showInNavBar: false },
  { destination: AppDestinations.SICK_LEAVE, label: 'Sick Leave', icon: 'medical-bag', showInNavBar: false },
];

export default function App() {
  const [userRole, setUserRole] = useState<string | null>(null);
  const [currentDestination, setCurrentDestination] = useState<AppDestinations>(AppDestinations.DASHBOARD);
  const [currentAssetPath, setCurrentAssetPath] = useState<string | null>(null);

  // 1. If viewing a WebView asset
  if (currentAssetPath) {
    return (
      <SafeAreaView style={styles.container}>
        <WebViewScreen
          assetPath={currentAssetPath}
          onBack={() => setCurrentAssetPath(null)}
        />
      </SafeAreaView>
    );
  }

  // 2. If not logged in
  if (!userRole) {
    return (
      <SafeAreaView style={styles.container}>
        <LoginScreen
          onLoginSuccess={(role) => {
            setUserRole(role);
            setCurrentDestination(AppDestinations.DASHBOARD);
          }}
        />
      </SafeAreaView>
    );
  }

  // 3. Admin Layout
  if (userRole === 'admin') {
    if (currentDestination === AppDestinations.DASHBOARD) {
      return (
        <SafeAreaView style={styles.container}>
          <AdminDashboardScreen
            onLogout={() => {
              setUserRole(null);
              setCurrentDestination(AppDestinations.DASHBOARD);
            }}
            onNavigateToDestination={(dest) => setCurrentDestination(dest as AppDestinations)}
            onNavigateToAsset={(assetPath) => setCurrentAssetPath(assetPath)}
          />
        </SafeAreaView>
      );
    } else {
      // Admin sub-screens (native styling)
      return (
        <SafeAreaView style={styles.container}>
          <View style={styles.header}>
            <TouchableOpacity
              onPress={() => setCurrentDestination(AppDestinations.DASHBOARD)}
              style={styles.backButton}
            >
              <MaterialCommunityIcons name="arrow-left" size={24} color="#ffffff" />
            </TouchableOpacity>
            <Text style={styles.headerTitle}>
              {currentDestination.charAt(0) + currentDestination.slice(1).toLowerCase()}
            </Text>
          </View>
          <View style={styles.content}>
            {currentDestination === AppDestinations.ATTENDANCE && <AttendanceScreen />}
            {currentDestination === AppDestinations.ROOMS && <RoomBookingScreen />}
            {currentDestination === AppDestinations.SICK_LEAVE && (
              <SickLeaveScreen onBackToDashboard={() => setCurrentDestination(AppDestinations.DASHBOARD)} />
            )}
          </View>
        </SafeAreaView>
      );
    }
  }

  // 4. Student Layout (Dashboard with Bottom Navigation Suite equivalent)
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        {currentDestination === AppDestinations.DASHBOARD && (
          <DashboardScreen
            onNavigateToPasses={() => setCurrentDestination(AppDestinations.PASSES)}
            onNavigateToNotifications={() => setCurrentDestination(AppDestinations.NOTIFICATIONS)}
            onNavigateToSickLeave={() => setCurrentDestination(AppDestinations.SICK_LEAVE)}
            onNavigateToAttendance={() => setCurrentDestination(AppDestinations.ATTENDANCE)}
            onNavigateToHistory={() => setCurrentDestination(AppDestinations.HISTORY)}
            onNavigateToRooms={() => setCurrentDestination(AppDestinations.ROOMS)}
            onLogout={() => {
              setUserRole(null);
              setCurrentDestination(AppDestinations.DASHBOARD);
            }}
          />
        )}
        {currentDestination === AppDestinations.PASSES && <RequestPassScreen />}
        {currentDestination === AppDestinations.HISTORY && <PassHistoryScreen />}
        {currentDestination === AppDestinations.ATTENDANCE && <AttendanceScreen />}
        {currentDestination === AppDestinations.ROOMS && <RoomBookingScreen />}
        {currentDestination === AppDestinations.NOTIFICATIONS && <NotificationsScreen />}
        {currentDestination === AppDestinations.SICK_LEAVE && (
          <SickLeaveScreen onBackToDashboard={() => setCurrentDestination(AppDestinations.DASHBOARD)} />
        )}
      </View>

      {/* Bottom Tab Bar (Navigation Suite Scaffold) */}
      <View style={styles.tabBar}>
        {navItems
          .filter((item) => item.showInNavBar)
          .map((item) => {
            const isSelected = currentDestination === item.destination;
            return (
              <TouchableOpacity
                key={item.destination}
                style={styles.tabItem}
                onPress={() => setCurrentDestination(item.destination)}
              >
                <MaterialCommunityIcons
                  name={item.icon}
                  size={24}
                  color={isSelected ? '#4648d4' : '#767586'}
                />
                <Text style={[styles.tabLabel, isSelected && styles.tabLabelActive]}>
                  {item.label}
                </Text>
              </TouchableOpacity>
            );
          })}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7f9fb',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: '#4648d4',
  },
  backButton: {
    marginRight: 16,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  content: {
    flex: 1,
  },
  tabBar: {
    flexDirection: 'row',
    height: 60,
    backgroundColor: '#ffffff',
    borderTopWidth: 1,
    borderTopColor: '#eceef0',
    paddingBottom: 6,
  },
  tabItem: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabLabel: {
    fontSize: 10,
    color: '#767586',
    marginTop: 4,
  },
  tabLabelActive: {
    color: '#4648d4',
    fontWeight: 'bold',
  },
});
