import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Alert,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

interface LoginScreenProps {
  onLoginSuccess: (role: string) => void;
}

export default function LoginScreen({ onLoginSuccess }: LoginScreenProps) {
  const [isStudentRole, setIsStudentRole] = useState(true);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSignIn = () => {
    if (!username || !password) {
      setErrorMessage('Please enter both fields');
      return;
    }

    if (isStudentRole) {
      if (username.trim() === 'student@gmail.com' && password === 'student') {
        Alert.alert('Success', 'Authentication successful');
        onLoginSuccess('student');
      } else {
        setErrorMessage('Invalid student credentials. Try student@gmail.com / student');
      }
    } else {
      if (username.trim() === 'admin@gmail.com' && password === 'admin') {
        Alert.alert('Success', 'Authentication successful');
        onLoginSuccess('admin');
      } else {
        setErrorMessage('Invalid admin credentials. Try admin@gmail.com / admin');
      }
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <ScrollView contentContainerStyle={styles.scrollContainer} keyboardShouldPersistTaps="handled">
        {/* App Logo */}
        <View style={styles.logoContainer}>
          <View style={styles.logoCircle}>
            <MaterialCommunityIcons name="fingerprint" size={40} color="#4648d4" />
          </View>
        </View>

        <Text style={styles.title}>Welcome to TNPS</Text>
        <Text style={styles.subtitle}>
          Sign in to manage your campus access and digital IDs.
        </Text>

        {/* Role Switcher */}
        <View style={styles.roleSwitcherContainer}>
          <TouchableOpacity
            style={[styles.roleButton, isStudentRole && styles.roleButtonActive]}
            onPress={() => {
              setIsStudentRole(true);
              setErrorMessage(null);
            }}
          >
            <Text style={[styles.roleButtonText, isStudentRole && styles.roleButtonTextActive]}>
              Student
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.roleButton, !isStudentRole && styles.roleButtonActive]}
            onPress={() => {
              setIsStudentRole(false);
              setErrorMessage(null);
            }}
          >
            <Text style={[styles.roleButtonText, !isStudentRole && styles.roleButtonTextActive]}>
              Admin
            </Text>
          </TouchableOpacity>
        </View>

        {/* Inputs */}
        <View style={styles.inputGroup}>
          <Text style={styles.inputLabel}>
            {isStudentRole ? 'University ID (UID) or Email' : 'Admin Email'}
          </Text>
          <View style={styles.inputWrapper}>
            <MaterialCommunityIcons name="account-outline" size={20} color="#767586" style={styles.inputIcon} />
            <TextInput
              style={styles.input}
              placeholder={isStudentRole ? 'Enter your UID' : 'admin@institution.edu'}
              placeholderTextColor="#767586"
              value={username}
              onChangeText={(text) => {
                setUsername(text);
                setErrorMessage(null);
              }}
              autoCapitalize="none"
              keyboardType="email-address"
            />
          </View>
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.inputLabel}>Password</Text>
          <View style={styles.inputWrapper}>
            <MaterialCommunityIcons name="lock-outline" size={20} color="#767586" style={styles.inputIcon} />
            <TextInput
              style={styles.input}
              placeholder="••••••••"
              placeholderTextColor="#767586"
              secureTextEntry={!isPasswordVisible}
              value={password}
              onChangeText={(text) => {
                setPassword(text);
                setErrorMessage(null);
              }}
              autoCapitalize="none"
            />
            <TouchableOpacity onPress={() => setIsPasswordVisible(!isPasswordVisible)}>
              <MaterialCommunityIcons
                name={isPasswordVisible ? 'eye-outline' : 'eye-off-outline'}
                size={20}
                color="#767586"
              />
            </TouchableOpacity>
          </View>
        </View>

        {errorMessage && <Text style={styles.errorText}>{errorMessage}</Text>}

        {/* Sign In Button */}
        <TouchableOpacity style={styles.signInButton} onPress={handleSignIn}>
          <Text style={styles.signInButtonText}>Sign In</Text>
        </TouchableOpacity>

        {/* Footer Security Note */}
        <View style={styles.securityNote}>
          <MaterialCommunityIcons name="shield-check" size={16} color="#767586" />
          <Text style={styles.securityNoteText}>
            Protected by institutional multi-factor authentication.
          </Text>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7f9fb',
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    padding: 24,
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 16,
  },
  logoCircle: {
    width: 72,
    height: 72,
    borderRadius: 36,
    backgroundColor: 'rgba(70, 72, 212, 0.1)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#191c1e',
    textAlign: 'center',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 14,
    color: '#464554',
    textAlign: 'center',
    marginBottom: 32,
    paddingHorizontal: 8,
    lineHeight: 20,
  },
  roleSwitcherContainer: {
    flexDirection: 'row',
    backgroundColor: '#e0e3e5',
    borderRadius: 8,
    padding: 4,
    marginBottom: 24,
  },
  roleButton: {
    flex: 1,
    paddingVertical: 10,
    alignItems: 'center',
    borderRadius: 6,
  },
  roleButtonActive: {
    backgroundColor: '#ffffff',
  },
  roleButtonText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#464554',
  },
  roleButtonTextActive: {
    color: '#191c1e',
  },
  inputGroup: {
    marginBottom: 16,
  },
  inputLabel: {
    fontSize: 14,
    fontWeight: '600',
    color: '#191c1e',
    marginBottom: 8,
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#c7c4d7',
    borderRadius: 8,
    backgroundColor: '#ffffff',
    paddingHorizontal: 12,
    height: 48,
  },
  inputIcon: {
    marginRight: 8,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: '#191c1e',
  },
  errorText: {
    color: '#ba1a1a',
    fontSize: 12,
    marginBottom: 16,
  },
  signInButton: {
    backgroundColor: '#4648d4',
    height: 48,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 8,
    marginBottom: 32,
  },
  signInButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  securityNote: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  securityNoteText: {
    fontSize: 12,
    color: '#767586',
    marginLeft: 6,
  },
});
