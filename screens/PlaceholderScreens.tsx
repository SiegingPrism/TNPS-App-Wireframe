import React from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, TextInput } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

// ----------------------------------------------------
// AttendanceScreen
// ----------------------------------------------------
export function AttendanceScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Attendance Records</Text>
      <Text style={styles.subtitle}>View your in/out history</Text>

      <View style={styles.gridRow}>
        <AttendanceStatCard title="Total Entries" count="0" subText="All time gate entries" icon="login" tint="#006c49" />
        <AttendanceStatCard title="Total Exits" count="0" subText="All time gate exits" icon="logout" tint="#ba1a1a" />
      </View>
      <View style={styles.gridRow}>
        <AttendanceStatCard title="This Month" count="0" subText="Movements this month" icon="calendar-month-outline" tint="#4648d4" />
        <AttendanceStatCard title="Current Status" count="IN" subText="Inside Campus" icon="map-marker-outline" tint="#5b598c" />
      </View>

      {/* Filters */}
      <View style={styles.card}>
        <View style={styles.cardHeaderRow}>
          <MaterialCommunityIcons name="filter-variant" size={20} color="#191c1e" />
          <Text style={styles.cardTitle}>Filter by Date</Text>
        </View>
        <View style={styles.flexRow}>
          <View style={styles.inputFlex}>
            <Text style={styles.inputLabel}>From Date</Text>
            <TextInput style={styles.disabledInput} value="dd/mm/yyyy" editable={false} />
          </View>
          <View style={styles.spacerWidth} />
          <View style={styles.inputFlex}>
            <Text style={styles.inputLabel}>To Date</Text>
            <TextInput style={styles.disabledInput} value="dd/mm/yyyy" editable={false} />
          </View>
        </View>
        <TouchableOpacity style={styles.filterButton}>
          <MaterialCommunityIcons name="magnify" size={20} color="#ffffff" />
          <Text style={styles.filterButtonText}>Filter</Text>
        </TouchableOpacity>
      </View>

      {/* Attendance Log */}
      <Text style={styles.sectionTitle}>Attendance Log</Text>
      <View style={styles.emptyCard}>
        <View style={styles.emptyIconCircle}>
          <MaterialCommunityIcons name="calendar-remove" size={32} color="#767586" />
        </View>
        <Text style={styles.emptyTitle}>No Records Found</Text>
        <Text style={styles.emptySubtitle}>No attendance records for the selected period</Text>
      </View>
    </ScrollView>
  );
}

function AttendanceStatCard({ title, count, subText, icon, tint }: { title: string; count: string; subText: string; icon: any; tint: string }) {
  return (
    <View style={styles.statCard}>
      <View style={styles.statHeader}>
        <Text style={styles.statTitle}>{title}</Text>
        <View style={[styles.iconBg, { backgroundColor: tint + '1c' }]}>
          <MaterialCommunityIcons name={icon} size={16} color={tint} />
        </View>
      </View>
      <View>
        <Text style={styles.statCount}>{count}</Text>
        <Text style={styles.statSubText}>{subText}</Text>
      </View>
    </View>
  );
}

// ----------------------------------------------------
// RoomBookingScreen
// ----------------------------------------------------
export function RoomBookingScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Room Booking</Text>
      <Text style={styles.subtitle}>Book a study room or discussion room</Text>
      <View style={styles.emptyCard}>
        <View style={styles.emptyIconCircle}>
          <MaterialCommunityIcons name="door-closed" size={32} color="#767586" />
        </View>
        <Text style={styles.emptyTitle}>No Active Bookings</Text>
        <Text style={styles.emptySubtitle}>You have not booked any rooms yet.</Text>
      </View>
    </ScrollView>
  );
}

// ----------------------------------------------------
// SickLeaveScreen
// ----------------------------------------------------
export function SickLeaveScreen({ onBackToDashboard }: { onBackToDashboard?: () => void }) {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.headerRow}>
        {onBackToDashboard && (
          <TouchableOpacity onPress={onBackToDashboard} style={styles.backButton}>
            <MaterialCommunityIcons name="arrow-left" size={24} color="#191c1e" />
          </TouchableOpacity>
        )}
        <Text style={styles.title}>Sick Leave</Text>
      </View>
      <Text style={styles.subtitle}>Submit and monitor sick leave requests</Text>
      <View style={styles.emptyCard}>
        <View style={styles.emptyIconCircle}>
          <MaterialCommunityIcons name="medical-bag" size={32} color="#767586" />
        </View>
        <Text style={styles.emptyTitle}>No Sick Leave Requests</Text>
        <Text style={styles.emptySubtitle}>There are no logs found for your profile.</Text>
      </View>
    </ScrollView>
  );
}

// ----------------------------------------------------
// RequestPassScreen
// ----------------------------------------------------
export function RequestPassScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Request Pass</Text>
      <Text style={styles.subtitle}>Create a new gate pass request</Text>
      <View style={styles.emptyCard}>
        <View style={styles.emptyIconCircle}>
          <MaterialCommunityIcons name="ticket-confirmation-outline" size={32} color="#767586" />
        </View>
        <Text style={styles.emptyTitle}>Request Pass Screen</Text>
        <Text style={styles.emptySubtitle}>Pass requests can be submitted here.</Text>
      </View>
    </ScrollView>
  );
}

// ----------------------------------------------------
// PassHistoryScreen
// ----------------------------------------------------
export function PassHistoryScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Pass History</Text>
      <Text style={styles.subtitle}>Review your historical gate passes</Text>
      <View style={styles.emptyCard}>
        <View style={styles.emptyIconCircle}>
          <MaterialCommunityIcons name="history" size={32} color="#767586" />
        </View>
        <Text style={styles.emptyTitle}>No History Available</Text>
        <Text style={styles.emptySubtitle}>No past requests were found.</Text>
      </View>
    </ScrollView>
  );
}

// ----------------------------------------------------
// NotificationsScreen
// ----------------------------------------------------
export function NotificationsScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Notifications</Text>
      <Text style={styles.subtitle}>Stay updated with campus access alerts</Text>
      <View style={styles.emptyCard}>
        <View style={styles.emptyIconCircle}>
          <MaterialCommunityIcons name="bell-off-outline" size={32} color="#767586" />
        </View>
        <Text style={styles.emptyTitle}>No Notifications</Text>
        <Text style={styles.emptySubtitle}>We will notify you when there's an update.</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#f7f9fb',
    flexGrow: 1,
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
  },
  backButton: {
    marginRight: 12,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#191c1e',
  },
  subtitle: {
    fontSize: 14,
    color: '#767586',
    marginBottom: 24,
  },
  gridRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  statCard: {
    flex: 1,
    height: 120,
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 12,
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: '#e0e3e5',
    marginHorizontal: 4,
  },
  statHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  statTitle: {
    fontSize: 11,
    color: '#767586',
  },
  iconBg: {
    width: 28,
    height: 28,
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
  },
  statCount: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#191c1e',
  },
  statSubText: {
    fontSize: 11,
    color: '#767586',
  },
  card: {
    backgroundColor: '#eceef0',
    borderRadius: 12,
    padding: 16,
    marginVertical: 16,
  },
  cardHeaderRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#191c1e',
    marginLeft: 8,
  },
  flexRow: {
    flexDirection: 'row',
  },
  inputFlex: {
    flex: 1,
  },
  spacerWidth: {
    width: 8,
  },
  inputLabel: {
    fontSize: 12,
    fontWeight: '600',
    color: '#191c1e',
    marginBottom: 4,
  },
  disabledInput: {
    backgroundColor: '#ffffff',
    borderRadius: 8,
    height: 40,
    paddingHorizontal: 12,
    color: '#767586',
    borderWidth: 1,
    borderColor: '#c7c4d7',
  },
  filterButton: {
    backgroundColor: '#4648d4',
    flexDirection: 'row',
    height: 40,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 16,
  },
  filterButtonText: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 14,
    marginLeft: 8,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#191c1e',
    marginBottom: 8,
  },
  emptyCard: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#e0e3e5',
    padding: 24,
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 200,
  },
  emptyIconCircle: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#e0e3e5',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
  },
  emptyTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#191c1e',
    marginBottom: 4,
  },
  emptySubtitle: {
    fontSize: 12,
    color: '#767586',
    textAlign: 'center',
  },
});
