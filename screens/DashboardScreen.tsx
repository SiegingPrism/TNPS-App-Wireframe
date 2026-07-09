import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

interface DashboardScreenProps {
  onNavigateToPasses: () => void;
  onNavigateToNotifications: () => void;
  onNavigateToSickLeave: () => void;
  onNavigateToAttendance: () => void;
  onNavigateToHistory: () => void;
  onNavigateToRooms: () => void;
  onLogout: () => void;
}

export default function DashboardScreen({
  onNavigateToPasses,
  onNavigateToNotifications,
  onNavigateToSickLeave,
  onNavigateToAttendance,
  onNavigateToHistory,
  onNavigateToRooms,
  onLogout,
}: DashboardScreenProps) {
  return (
    <SafeAreaView style={styles.safeArea}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>TNPS</Text>
        <View style={styles.headerActions}>
          <TouchableOpacity style={styles.notificationButton} onPress={onNavigateToNotifications}>
            <MaterialCommunityIcons name="bell-outline" size={22} color="#4648d4" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.logoutButton} onPress={onLogout}>
            <MaterialCommunityIcons name="logout" size={18} color="#ffffff" />
            <Text style={styles.logoutText}>Logout</Text>
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {/* Welcome */}
        <Text style={styles.welcomeText}>Welcome, ISHAN!</Text>
        <Text style={styles.dateText}>Sunday, 21 June 2026</Text>

        {/* Stats */}
        <Text style={styles.sectionTitle}>Stats</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.statsContainer}>
          <StatCard title="Current Status" value="Active" subValue="Account Status" icon="check-circle-outline" />
          <StatCard title="Total Passes" value="0" subValue="All time passes" icon="ticket-confirmation-outline" />
          <StatCard title="This Month" value="0" subValue="Passes this month" icon="calendar-month-outline" />
          <StatCard title="Active Pass" value="IN" subValue="Inside Campus" icon="walk" />
          <StatCard title="Fee Status" value="Pending" subValue="Fee Status" icon="cash-multiple" />
        </ScrollView>

        {/* Quick Actions */}
        <Text style={styles.sectionTitle}>Quick Actions</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.actionsContainer}>
          <QuickActionCard label="Request Pass" icon="plus-circle-outline" onClick={onNavigateToPasses} />
          <QuickActionCard label="View Attendance" icon="calendar-check-outline" onClick={onNavigateToAttendance} />
          <QuickActionCard label="Pass History" icon="history" onClick={onNavigateToHistory} />
          <QuickActionCard label="Room Booking" icon="door-open" onClick={onNavigateToRooms} />
          <QuickActionCard
            label="Request Sick Leave"
            icon="medical-bag"
            onClick={onNavigateToSickLeave}
            isSickLeave={true}
          />
        </ScrollView>

        {/* Profile Summary */}
        <View style={styles.profileCard}>
          <View style={styles.profileHeader}>
            <Text style={styles.profileTitle}>Profile Summary</Text>
            <TouchableOpacity>
              <Text style={styles.viewProfileText}>View Full Profile</Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.profileText}>Student UID: 24003128</Text>
          <Text style={styles.profileText}>Department: Computer Engineering</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

interface StatCardProps {
  title: string;
  value: string;
  subValue: string;
  icon: string;
}

function StatCard({ title, value, subValue, icon }: StatCardProps) {
  return (
    <View style={styles.statCard}>
      <View style={styles.statHeader}>
        <Text style={styles.statTitle}>{title.toUpperCase()}</Text>
        <MaterialCommunityIcons name={icon} size={20} color="#4648d4" />
      </View>
      <View>
        <Text style={styles.statValue}>{value}</Text>
        <Text style={styles.statSubValue}>{subValue}</Text>
      </View>
    </View>
  );
}

interface QuickActionCardProps {
  label: string;
  icon: string;
  onClick: () => void;
  isSickLeave?: boolean;
}

function QuickActionCard({ label, icon, onClick, isSickLeave }: QuickActionCardProps) {
  return (
    <TouchableOpacity
      style={[styles.actionCard, isSickLeave && styles.actionCardSick]}
      onPress={onClick}
    >
      <MaterialCommunityIcons name={icon} size={24} color={isSickLeave ? '#ffffff' : '#4648d4'} />
      <Text style={[styles.actionLabel, isSickLeave && styles.actionLabelSick]}>{label}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#f7f9fb',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#eceef0',
    backgroundColor: '#ffffff',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#4648d4',
  },
  headerActions: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  notificationButton: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#eceef0',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 8,
  },
  logoutButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#4648d4',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 8,
  },
  logoutText: {
    color: '#ffffff',
    fontSize: 12,
    fontWeight: 'bold',
    marginLeft: 4,
  },
  scrollContainer: {
    padding: 16,
  },
  welcomeText: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#191c1e',
  },
  dateText: {
    fontSize: 14,
    color: '#767586',
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#191c1e',
    marginBottom: 8,
    marginTop: 8,
  },
  statsContainer: {
    paddingRight: 16,
    gap: 8,
    marginBottom: 24,
  },
  statCard: {
    width: 140,
    height: 120,
    backgroundColor: '#f2f4f6',
    borderRadius: 12,
    padding: 12,
    justifyContent: 'space-between',
    marginRight: 8,
  },
  statHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  statTitle: {
    fontSize: 10,
    color: '#767586',
    fontWeight: '600',
  },
  statValue: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#191c1e',
  },
  statSubValue: {
    fontSize: 11,
    color: '#767586',
  },
  actionsContainer: {
    paddingRight: 16,
    gap: 8,
    marginBottom: 24,
  },
  actionCard: {
    width: 120,
    height: 90,
    backgroundColor: '#eceef0',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 8,
    marginRight: 8,
  },
  actionCardSick: {
    backgroundColor: '#F2716B',
  },
  actionLabel: {
    fontSize: 12,
    fontWeight: '600',
    color: '#4648d4',
    textAlign: 'center',
    marginTop: 8,
  },
  actionLabelSick: {
    color: '#ffffff',
  },
  profileCard: {
    backgroundColor: '#eceef0',
    borderRadius: 12,
    padding: 16,
    marginBottom: 80,
  },
  profileHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  profileTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#191c1e',
  },
  viewProfileText: {
    fontSize: 12,
    color: '#4648d4',
    fontWeight: '600',
  },
  profileText: {
    fontSize: 14,
    color: '#191c1e',
    marginBottom: 4,
  },
});
