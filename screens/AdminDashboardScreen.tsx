import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
  FlatList,
  Modal,
  Dimensions,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

interface AdminDashboardScreenProps {
  onLogout: () => void;
  onNavigateToDestination: (dest: string) => void;
  onNavigateToAsset: (path: string) => void;
}

interface AdminMenuItem {
  label: string;
  icon: string;
  subItems?: string[];
}

const adminItems: AdminMenuItem[] = [
  { label: 'Todays log', icon: 'format-list-bulleted' },
  { label: 'Students', icon: 'account-group', subItems: ['Student List', 'Hostel Student', 'New Student'] },
  { label: 'Attendance', icon: 'calendar-check' },
  { label: 'Bonafide Requests', icon: 'file-document-outline' },
  {
    label: 'Activity',
    icon: 'trending-up',
    subItems: [
      'Pass Requests',
      'Hostel Out',
      'Gate Out',
      'Active Pass',
      'Hostel Monitoring',
      'Global Analytics',
      'Campus Reports',
      'College Late Comers',
      'Verify Complaints',
      'Announcements',
    ],
  },
  { label: 'Barcode scanner', icon: 'qrcode-scan', subItems: ['Campus Gate', 'Hostel Gate'] },
  { label: 'Sick Leave', icon: 'heart-pulse', subItems: ['Record Sick Leave', 'Sick Leave Logs', 'Sick Requests'] },
  {
    label: 'Setting',
    icon: 'cog-outline',
    subItems: ['Add User', 'Update User', 'Set Time Bound', 'Feature Control'],
  },
  { label: 'Room Booking', icon: 'door-open', subItems: ['Room Bookings', 'Pending Admissions'] },
];

export default function AdminDashboardScreen({
  onLogout,
  onNavigateToDestination,
  onNavigateToAsset,
}: AdminDashboardScreenProps) {
  const [expandedItem, setExpandedItem] = useState<string | null>(null);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [drawerExpandedItem, setDrawerExpandedItem] = useState<string | null>(null);

  const handleSubItemNavigation = (subItem: string) => {
    setIsDrawerOpen(false);
    switch (subItem) {
      // Students
      case 'Student List':
        onNavigateToAsset('stitch_mobile_application_development/students/student_list/code.html');
        break;
      case 'Hostel Student':
        onNavigateToAsset('stitch_mobile_application_development/students/hostel_students/code.html');
        break;
      case 'New Student':
        onNavigateToAsset('stitch_mobile_application_development/students/new_student/code.html');
        break;
      // Activity
      case 'Pass Requests':
        onNavigateToAsset('stitch_mobile_application_development/activity/pass_requests/code.html');
        break;
      case 'Hostel Out':
      case 'Gate Out':
      case 'Hostel Monitoring':
        onNavigateToAsset('stitch_mobile_application_development/activity/gate_hostel_out/code.html');
        break;
      case 'Active Pass':
        onNavigateToAsset('stitch_mobile_application_development/activity/active_passes/code.html');
        break;
      case 'Global Analytics':
        onNavigateToAsset('stitch_mobile_application_development/activity/global_analytics/code.html');
        break;
      case 'Campus Reports':
        onNavigateToAsset('stitch_mobile_application_development/activity/campus_reports/code.html');
        break;
      case 'College Late Comers':
        onNavigateToAsset('stitch_mobile_application_development/activity/college_late_comers/code.html');
        break;
      case 'Verify Complaints':
      case 'Announcements':
        onNavigateToAsset('stitch_mobile_application_development/activity/security_notices/code.html');
        break;
      // Barcode
      case 'Campus Gate':
      case 'Hostel Gate':
        onNavigateToAsset('stitch_mobile_application_development/barcode/code.html');
        break;
      // Sick Leave
      case 'Record Sick Leave':
        onNavigateToAsset('stitch_mobile_application_development/sick/record_sick_leave/code.html');
        break;
      case 'Sick Leave Logs':
        onNavigateToAsset('stitch_mobile_application_development/sick/sick_leave_logs/code.html');
        break;
      case 'Sick Requests':
        onNavigateToAsset('stitch_mobile_application_development/sick/sick_requests/code.html');
        break;
      // Setting
      case 'Add User':
        onNavigateToAsset('stitch_mobile_application_development/setting/user_management/code.html');
        break;
      case 'Update User':
        onNavigateToAsset('stitch_mobile_application_development/setting/update_user/code.html');
        break;
      case 'Set Time Bound':
        onNavigateToAsset('stitch_mobile_application_development/setting/set_time_bound/code.html');
        break;
      case 'Feature Control':
        onNavigateToAsset('stitch_mobile_application_development/setting/feature_control/code.html');
        break;
      // Room Booking
      case 'Room Bookings':
        onNavigateToAsset('stitch_mobile_application_development/roombook/room_bookings/code.html');
        break;
      case 'Pending Admissions':
        onNavigateToAsset('stitch_mobile_application_development/roombook/pending_admissions/code.html');
        break;
      default:
        console.log(`Opening ${subItem}...`);
    }
  };

  const handleItemClick = (item: AdminMenuItem) => {
    if (item.subItems && item.subItems.length > 0) {
      setExpandedItem(expandedItem === item.label ? null : item.label);
    } else {
      setIsDrawerOpen(false);
      switch (item.label) {
        case 'Todays log':
          onNavigateToAsset('stitch_mobile_application_development/todayslog/code.html');
          break;
        case 'Attendance':
          onNavigateToAsset('stitch_mobile_application_development/attendance/code.html');
          break;
        case 'Bonafide Requests':
          onNavigateToAsset('stitch_mobile_application_development/bonafied/code.html');
          break;
        default:
          console.log(`Opening ${item.label}...`);
      }
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <TouchableOpacity onPress={() => setIsDrawerOpen(true)} style={styles.menuButton}>
            <MaterialCommunityIcons name="menu" size={24} color="#ffffff" />
          </TouchableOpacity>
          <MaterialCommunityIcons name="shield-account" size={24} color="#ffffff" style={styles.shieldIcon} />
          <Text style={styles.headerTitle}>SuperID Admin</Text>
        </View>
        <TouchableOpacity style={styles.logoutButton} onPress={onLogout}>
          <MaterialCommunityIcons name="logout" size={18} color="#ffffff" />
          <Text style={styles.logoutText}>Logout</Text>
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.welcomeText}>Welcome back</Text>
        <Text style={styles.subtitleText}>Manage SuperID system settings and logs.</Text>

        {/* Grid Items */}
        <View style={styles.grid}>
          {adminItems.map((item) => {
            const isExpanded = expandedItem === item.label;
            return (
              <View
                key={item.label}
                style={[
                  styles.gridItemContainer,
                  isExpanded ? styles.gridItemFullWidth : styles.gridItemHalfWidth,
                ]}
              >
                <TouchableOpacity
                  style={[styles.menuCard, isExpanded && styles.menuCardExpanded]}
                  onPress={() => handleItemClick(item)}
                >
                  <View style={styles.iconCircle}>
                    <MaterialCommunityIcons name={item.icon} size={24} color="#4648d4" />
                  </View>
                  <View style={styles.menuCardLabelContainer}>
                    <Text style={styles.menuCardLabel}>{item.label}</Text>
                    {item.subItems && (
                      <MaterialCommunityIcons
                        name={isExpanded ? 'chevron-up' : 'chevron-down'}
                        size={16}
                        color="#767586"
                        style={styles.chevronIcon}
                      />
                    )}
                  </View>

                  {isExpanded && item.subItems && (
                    <View style={styles.subItemsList}>
                      {item.subItems.map((subItem) => (
                        <TouchableOpacity
                          key={subItem}
                          style={styles.subItemRow}
                          onPress={() => handleSubItemNavigation(subItem)}
                        >
                          <View style={styles.subItemDot} />
                          <Text style={styles.subItemText}>{subItem}</Text>
                        </TouchableOpacity>
                      ))}
                    </View>
                  )}
                </TouchableOpacity>
              </View>
            );
          })}
        </View>
      </ScrollView>

      {/* Navigation Drawer Modal */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={isDrawerOpen}
        onRequestClose={() => setIsDrawerOpen(false)}
      >
        <View style={styles.modalOverlay}>
          <TouchableOpacity style={styles.modalBackgroundClose} onPress={() => setIsDrawerOpen(false)} />
          <View style={styles.drawerView}>
            <View style={styles.drawerHeader}>
              <Text style={styles.drawerHeaderTitle}>SuperID Menu</Text>
              <TouchableOpacity onPress={() => setIsDrawerOpen(false)}>
                <MaterialCommunityIcons name="close" size={24} color="#191c1e" />
              </TouchableOpacity>
            </View>

            <ScrollView style={styles.drawerItems}>
              {adminItems.map((item) => {
                const isExpanded = drawerExpandedItem === item.label;
                const hasSubItems = item.subItems && item.subItems.length > 0;
                return (
                  <View key={item.label}>
                    <TouchableOpacity
                      style={styles.drawerItemRow}
                      onPress={() => {
                        if (hasSubItems) {
                          setDrawerExpandedItem(isExpanded ? null : item.label);
                        } else {
                          handleItemClick(item);
                        }
                      }}
                    >
                      <View style={styles.drawerItemLeft}>
                        <MaterialCommunityIcons name={item.icon} size={22} color="#4648d4" />
                        <Text style={styles.drawerItemLabel}>{item.label}</Text>
                      </View>
                      {hasSubItems && (
                        <MaterialCommunityIcons
                          name={isExpanded ? 'chevron-up' : 'chevron-down'}
                          size={18}
                          color="#767586"
                        />
                      )}
                    </TouchableOpacity>

                    {isExpanded && item.subItems && (
                      <View style={styles.drawerSubItemsList}>
                        {item.subItems.map((subItem) => (
                          <TouchableOpacity
                            key={subItem}
                            style={styles.drawerSubItemRow}
                            onPress={() => handleSubItemNavigation(subItem)}
                          >
                            <View style={styles.drawerSubItemDot} />
                            <Text style={styles.drawerSubItemText}>{subItem}</Text>
                          </TouchableOpacity>
                        ))}
                      </View>
                    )}
                  </View>
                );
              })}
            </ScrollView>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
}

const screenWidth = Dimensions.get('window').width;

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
    backgroundColor: '#4648d4',
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  menuButton: {
    marginRight: 12,
  },
  shieldIcon: {
    marginRight: 8,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  logoutButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
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
    fontSize: 24,
    fontWeight: 'bold',
    color: '#191c1e',
    marginTop: 8,
  },
  subtitleText: {
    fontSize: 14,
    color: '#767586',
    marginBottom: 24,
    marginTop: 4,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  gridItemContainer: {
    marginBottom: 12,
  },
  gridItemHalfWidth: {
    width: (screenWidth - 44) / 2,
  },
  gridItemFullWidth: {
    width: screenWidth - 32,
  },
  menuCard: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 12,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#e0e3e5',
  },
  menuCardExpanded: {
    alignItems: 'stretch',
  },
  iconCircle: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: 'rgba(70, 72, 212, 0.1)',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
    alignSelf: 'center',
  },
  menuCardLabelContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  menuCardLabel: {
    fontSize: 13,
    fontWeight: '500',
    color: '#191c1e',
  },
  chevronIcon: {
    marginLeft: 4,
  },
  subItemsList: {
    marginTop: 12,
    borderTopWidth: 1,
    borderTopColor: '#f2f4f6',
    paddingTop: 8,
  },
  subItemRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 8,
  },
  subItemDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: '#4648d4',
    marginRight: 8,
  },
  subItemText: {
    fontSize: 14,
    color: '#464554',
  },
  modalOverlay: {
    flex: 1,
    flexDirection: 'row',
  },
  modalBackgroundClose: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  drawerView: {
    width: 300,
    backgroundColor: '#ffffff',
    height: '100%',
    padding: 16,
  },
  drawerHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#eceef0',
  },
  drawerHeaderTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#4648d4',
  },
  drawerItems: {
    marginTop: 16,
  },
  drawerItemRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 8,
    borderRadius: 8,
  },
  drawerItemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  drawerItemLabel: {
    fontSize: 16,
    fontWeight: '500',
    color: '#191c1e',
    marginLeft: 12,
  },
  drawerSubItemsList: {
    paddingLeft: 24,
    marginBottom: 8,
  },
  drawerSubItemRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 6,
  },
  drawerSubItemDot: {
    width: 4,
    height: 4,
    borderRadius: 2,
    backgroundColor: '#4648d4',
    marginRight: 8,
  },
  drawerSubItemText: {
    fontSize: 14,
    color: '#464554',
  },
});
